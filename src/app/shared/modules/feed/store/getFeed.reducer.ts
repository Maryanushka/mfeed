import { createFeature, createReducer, on } from "@ngrx/store";
import { IFeedState } from "../types/feedState.interface";
import { getFeedActions } from "./getFeed.action";

export const FEED_KEY = "FEED" 

const initialState: IFeedState = {
	isLoading: false,
	error: null,
	data: null
}

export const feedReducer = createReducer(
	initialState, 
	on(getFeedActions.getFeed, (state): IFeedState => ({
			...state,
			isLoading: true
		})
	),
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
)

export const feedFeature = createFeature({
  name: FEED_KEY,
  reducer: feedReducer,
});