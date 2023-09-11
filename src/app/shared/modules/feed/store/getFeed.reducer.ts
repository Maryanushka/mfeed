import { createFeature, createReducer, on } from "@ngrx/store";
import { IFeedState } from "../types/feedState.interface";
import { getFeedActions } from "./getFeed.action";
import { routerNavigatedAction } from "@ngrx/router-store";

export const FEED_KEY = "FEED" 

const initialState: IFeedState = {
	isLoading: true,
	error: null,
	data: null
}

export const feedReducer = createReducer(
	initialState, 
	on(getFeedActions.getFeed, (state): IFeedState => state),
	on(getFeedActions.getFeedSuccess, (state, action): IFeedState => ({
			...state,
			isLoading: false,
			data: action.feed
		})
	),
	on(getFeedActions.getFeedFailure, (state): IFeedState => ({
			...state,
			isLoading: false
		})
	),
	on(routerNavigatedAction, (): IFeedState => initialState)
)

export const feedFeature = createFeature({
  name: FEED_KEY,
  reducer: feedReducer,
});