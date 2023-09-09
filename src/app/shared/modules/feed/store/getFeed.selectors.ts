import { createFeatureSelector, createSelector } from "@ngrx/store"
import { FEED_KEY } from "./getFeed.reducer"
import { IFeedState } from "../types/feedState.interface"

export const feedFeatureSelector = createFeatureSelector<IFeedState>(FEED_KEY)

export const feedIsLoadingSelector = createSelector(
	feedFeatureSelector, 
	(feedState: IFeedState) => feedState.isLoading
)
export const feedDataSelector = createSelector(
	feedFeatureSelector, 
	(feedState: IFeedState) => feedState.data
)
export const feedErrorSelector = createSelector(
	feedFeatureSelector, 
	(feedState: IFeedState) => feedState.error
)