import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of, map } from 'rxjs';
import { getArticleActions } from './update-article.actions';
import { IArticle } from '../../shared/types/article.interface';
import { ArticleService as SharedArticleService} from '../../shared/services/article.service';

@Injectable()
export class GetArticleEffects {
  private actions$ = inject(Actions);
	private sharedArticleService = inject(SharedArticleService)

  getArticle$ = createEffect(() => this.actions$.pipe(
    ofType(getArticleActions.getArticle),
    switchMap(({slug}) => {
			return this.sharedArticleService.getArticle(slug).pipe(
				map((article: IArticle) => {
					return getArticleActions.getArticleSuccess({article})
				}),
				catchError(() => {
					return of(getArticleActions.getArticleFailure())
				})
			)
		})
  ));
}
