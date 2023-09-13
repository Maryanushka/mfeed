import { createFeatureSelector, createSelector } from "@ngrx/store"
import { IPopularState } from "../types/PopularTypesTate.interface"
import { POPULAR_TAGS_KEY } from "./retPopularTags.reducer"

export const popularTagsSelector = createFeatureSelector<IPopularState>(POPULAR_TAGS_KEY)

export const isLoadingSelector = createSelector(
	popularTagsSelector, 
	(popularTagsState: IPopularState) => popularTagsState.isLoading
)
export const getPopularTagsSelector = createSelector(
	popularTagsSelector, 
	(popularTagsState: IPopularState) => popularTagsState.data
)
export const errorTagsSelector = createSelector(
	popularTagsSelector, 
	(popularTagsState: IPopularState) => popularTagsState.error
)
