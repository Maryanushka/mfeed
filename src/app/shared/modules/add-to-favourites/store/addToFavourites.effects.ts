import { Injectable, inject } from "@angular/core";

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";

import { AddToFavoritesService } from "../services/add-to-favorites.service";
import { addToFavoritesActions } from "./addToFavourites.action";
import { IArticle } from "../../../types/article.interface";

@Injectable()
export class AddToFavoritesEffects {
	
	private actions$ = inject(Actions)
	private addToFavoritesService = inject(AddToFavoritesService)

	getCurrentUser$ = createEffect(() => this.actions$.pipe(
		ofType(addToFavoritesActions.addToFavorites),
		switchMap(({slug, isFavorited}) => {
			const artice$ = isFavorited 
			? this.addToFavoritesService.removeFromFavourites(slug) 
			: this.addToFavoritesService.addtoFaforites(slug)



			return artice$.pipe(
				map((article: IArticle) => {
					return addToFavoritesActions.addToFavoritesSuccess({article})
				}),
				catchError(() => {
					return of(addToFavoritesActions.addToFavoritesFailure())
				})
			)
		})
	))
}