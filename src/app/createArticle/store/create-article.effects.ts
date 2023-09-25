import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of, map, tap } from 'rxjs';
import { createArticleActions } from './create-article.actions';
import { Router } from '@angular/router';
import { CreateArticleService } from '../services/createArticle.service';
import { IArticle } from '../../shared/types/article.interface';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class CreateArticleEffects {
  private actions$ = inject(Actions);
	private createArticleService = inject(CreateArticleService)
	private router = inject(Router)

  createArticle$ = createEffect(() => this.actions$.pipe(
    ofType(createArticleActions.createArticle),
    switchMap(({articleInput}) => {
			return this.createArticleService.createArticle(articleInput).pipe(
				map((article: IArticle) => {
					return createArticleActions.createArticleSuccess({article})
				}),
				catchError((errrorResponse: HttpErrorResponse) => {
					return of(createArticleActions.createArticleFailure({errors: errrorResponse.error.errors}))
				})
			)
		})
  ));

	redirectAfterCreate$ = createEffect(
		() => this.actions$.pipe(
			ofType(createArticleActions.createArticleSuccess),
			tap(({article}) => {
				console.log('success');
				this.router.navigate(['/article', article.slug])
			})
		),
		{dispatch: false}
	)
}
