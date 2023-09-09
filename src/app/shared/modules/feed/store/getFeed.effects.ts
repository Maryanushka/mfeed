import { Injectable, inject } from "@angular/core";

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";

import { FeedService } from "../services/feed.service";
import { getFeedActions } from "./getFeed.action";
import { IGetFeedResponce } from "../types/getFeedResponce.interface";

@Injectable()
export class GetFeedEffects {
	
	private actions$ = inject(Actions)
	private feedService = inject(FeedService)

	getCurrentUser$ = createEffect(() => this.actions$.pipe(
		ofType(getFeedActions.getFeed),
		switchMap(({url}) => {
			return this.feedService.getFeed(url).pipe(
				map((feed: IGetFeedResponce) => {
					return getFeedActions.getFeedSuccess({feed})
				}),
				catchError(() => {
					return of(getFeedActions.getFeedFailure())
				})
			)
		})
	))
}