import { createFeatureSelector, createSelector } from "@ngrx/store"
import { IArticleState } from "../types/articleState.interface"
import { ARTICLE_KEY } from "./getArtictle.reducer"

export const articleFeatureSelector = createFeatureSelector<IArticleState>(ARTICLE_KEY)

export const articleIsLoadingSelector = createSelector(
	articleFeatureSelector, 
	(articleState: IArticleState) => articleState.isLoading
)
export const articleDataSelector = createSelector(
	articleFeatureSelector, 
	(articleState: IArticleState) => articleState.data
)
export const articleErrorSelector = createSelector(
	articleFeatureSelector, 
	(articleState: IArticleState) => articleState.error
)