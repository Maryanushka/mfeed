import { Injectable, inject } from "@angular/core";
import { Router } from "@angular/router";

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap } from "rxjs";

import { deleteArticleActions } from "./getArticle.action";
import { ArticleService } from "../services/article.service";


@Injectable() 
export class DeleteArticleEffects {

	private actions$ = inject(Actions)
	private ArticleService = inject(ArticleService)
	private router = inject(Router)
	
	deleteArticle$ = createEffect(() => this.actions$.pipe(
		ofType(deleteArticleActions.deleteArticle),
		switchMap(({slug}) => {
			return this.ArticleService.deleteArticle(slug).pipe(
				map(() => {
					return deleteArticleActions.deleteArticleSuccess()
				}),
				catchError(() => {
					return of(deleteArticleActions.deleteArticleFailure())
				})
			)
		})
	))

	redirectAfterDelete$ = createEffect(
		() => this.actions$.pipe(
			ofType(deleteArticleActions.deleteArticleSuccess),
			tap(() => {
				console.log('success');
				this.router.navigateByUrl('/')
			})
		),
		{dispatch: false}
	)

}