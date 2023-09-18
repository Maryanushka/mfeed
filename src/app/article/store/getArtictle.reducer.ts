import { createFeature, createReducer, on } from "@ngrx/store";
import { IArticleState } from "../types/articleState.interface";
import { getArticleActions } from "./getArticle.action";
import { routerNavigatedAction } from "@ngrx/router-store";

export const ARTICLE_KEY = "ARTICLE"

const initialState: IArticleState = {
	isLoading: true,
	error: null,
	data: null
}

export const articleReducer = createReducer(
	initialState,
	on(getArticleActions.getArticle, (state): IArticleState => state),
	on(getArticleActions.getArticleSuccess, (state, action): IArticleState => ({
			...state,
			isLoading: false,
			data: action.article
		})
	),
	on(getArticleActions.getArticleFailure, (state): IArticleState => ({
			...state,
			isLoading: false
		})
	),
	on(routerNavigatedAction, (): IArticleState => initialState)
)

export const articleFeature = createFeature({
  name: ARTICLE_KEY,
  reducer: articleReducer,
});