import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CREATE_ARTICLE_FEATURE_KEY} from './create-article.reducer';
import { ICreateArticleState } from '../types/createArticleState.interface';

const createArticleFeatureSelector = createFeatureSelector<ICreateArticleState>(CREATE_ARTICLE_FEATURE_KEY)

export const isSubmitingCASelector = createSelector(
  createArticleFeatureSelector,
  (state: ICreateArticleState) => state.isSubmitting
);
export const validationErrorsCASelector = createSelector(
  createArticleFeatureSelector,
  (state: ICreateArticleState) => state.validationErrors
);

