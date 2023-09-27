import { createReducer, on, Action, createFeature } from '@ngrx/store';
import { IEditArticleState } from '../types/editArticleState.interface';
import { getArticleActions, updateArticleActions } from './update-article.actions';



export const UPDATE_ARTICLE_FEATURE_KEY = 'UPDATE_ARTICLE';


export const initialEditArticleState: IEditArticleState = {
	isSubmitting: false,
	isLoading: false,
	article: null,
	validationErrors: null
}

const reducer = createReducer(
  initialEditArticleState,
  on(updateArticleActions.updateArticle, (state): IEditArticleState => ({
			...state,
			isSubmitting: true
		})
	),
  on(updateArticleActions.updateArticleSuccess, (state): IEditArticleState => ({
			...state,
			isSubmitting: false
		})
	),
  on(updateArticleActions.updateArticleFailure, (state, action): IEditArticleState => ({
			...state,
			isSubmitting: false,
			validationErrors: action.validationErrors
		})
	),
	on(getArticleActions.getArticle, (state): IEditArticleState => ({
			...state,
			isLoading: true
		})
	),
	on(getArticleActions.getArticleSuccess, (state, action): IEditArticleState => ({
			...state,
			article: action.article,
			isLoading: false
		})
	),
	on(getArticleActions.getArticleFailure, (state): IEditArticleState => ({
			...state,
			isLoading: false
		})
	),
);

export const updateAticleFeature = createFeature({
  name: UPDATE_ARTICLE_FEATURE_KEY,
  reducer: reducer,
});
