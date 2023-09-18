import { Injectable, inject } from "@angular/core";

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { ArticleService as sharedArticleService } from "../../shared/services/article.service";
import { getArticleActions } from "./getArticle.action";
import { IArticle } from "../../shared/types/article.interface";

@Injectable() 
export class GetArticleEffects {

	private actions$ = inject(Actions)
	private sharedArticleService = inject(sharedArticleService)

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
	))
}