import { Injectable, inject } from "@angular/core";

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";

import { FeedService } from "../../feed/services/feed.service";
import { getFeedActions } from "../../feed/store/getFeed.action";
import { IGetFeedResponce } from "../../feed/types/getFeedResponce.interface";
import { GetPopularTagsService } from "../services/getPopularTags.service";
import { getPopularTagsActions } from "./getPopularTags.action";
import { IGetPopularTagsResponse } from "../types/getPopularTagsResponse";
import { PopularTagType } from "../../../types/popularTagType";

@Injectable()
export class GetPopularTagsEffects {
	
	private actions$ = inject(Actions)
	private getPopularTagsService = inject(GetPopularTagsService)

	getPopularTags$ = createEffect(() => this.actions$.pipe(
		ofType(getPopularTagsActions.getTags),
		switchMap(() => {
			return this.getPopularTagsService.getPopularTags().pipe(
				map((popularTags: PopularTagType[]) => {
					return getPopularTagsActions.getTagsSuccess({popularTags: popularTags})
				}),
				catchError(() => {
					return of(getPopularTagsActions.getTagsFailure())
				})
			)
		})
	))
}