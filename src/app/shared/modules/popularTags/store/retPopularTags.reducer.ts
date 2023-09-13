import { createFeature, createReducer, on } from "@ngrx/store"
import { IPopularState } from "../types/PopularTypesTate.interface"
import { getPopularTagsActions } from "./getPopularTags.action"

export const POPULAR_TAGS_KEY = 'POPULAR_TAGS'

const initialState: IPopularState = {
	data: null,
	error: null,
	isLoading: false
}

export const poplarTagsReducer = createReducer(
	initialState,
	on(getPopularTagsActions.getTags, (state): IPopularState => ({
		...state,
		isLoading: true
	})),
	on(getPopularTagsActions.getTagsSuccess, (state, action): IPopularState => ({
			...state,
			isLoading: false,
			data: action.popularTags
		})
	),
	on(getPopularTagsActions.getTagsFailure, (state, action): IPopularState => ({
			...state,
			isLoading: false,
		})
	)
)

export const popularTagsFeature = createFeature({
	name: POPULAR_TAGS_KEY,
	reducer: poplarTagsReducer
})