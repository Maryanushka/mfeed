import { createReducer, on, Action, createFeature } from '@ngrx/store';

import { CreateArticleEntity } from './create-article.models';
import { createArticleActions } from './create-article.actions';
import { ICreateArticleState } from '../types/createArticleState.interface';

export const CREATE_ARTICLE_FEATURE_KEY = 'CREATE_ARTICLE';


export const initialCreateArticleState: ICreateArticleState = {
	isSubmitting: false,
	validationErrors: null
}

const reducer = createReducer(
  initialCreateArticleState,
  on(createArticleActions.createArticle, (state): ICreateArticleState => ({
			...state,
			isSubmitting: true
		})
	),
  on(createArticleActions.createArticleSuccess, (state): ICreateArticleState => ({
			...state,
			isSubmitting: false
		})
	),
  on(createArticleActions.createArticleFailure, (state, action): ICreateArticleState => ({
			...state,
			isSubmitting: false,
			validationErrors: action.validationErrors
		})
	),
);

export const createAticleFeature = createFeature({
  name: CREATE_ARTICLE_FEATURE_KEY,
  reducer: reducer,
});
