import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of, map, tap } from 'rxjs';
import { updateArticleActions } from './update-article.actions';
import { Router } from '@angular/router';
import { EditArticleService } from '../services/editArticle.service';
import { IArticle } from '../../shared/types/article.interface';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class UpdateArticleEffects {
  private actions$ = inject(Actions);
	private editArticleService = inject(EditArticleService)
	private router = inject(Router)

  updateArticle$ = createEffect(() => this.actions$.pipe(
    ofType(updateArticleActions.updateArticle),
    switchMap(({slug, articleInput}) => {
			return this.editArticleService.updateArticle(slug, articleInput).pipe(
				map((article: IArticle) => {
					return updateArticleActions.updateArticleSuccess({article})
				}),
				catchError((errrorResponse: HttpErrorResponse) => {
					return of(updateArticleActions.updateArticleFailure({validationErrors: errrorResponse.error.errors}))
				})
			)
		})
  ));

	redirectAfterUpdate$ = createEffect(
		() => this.actions$.pipe(
			ofType(updateArticleActions.updateArticleSuccess),
			tap(({article}) => {
				console.log('success');
				this.router.navigate(['/articles', article.slug])
			})
		),
		{dispatch: false}
	)
}
