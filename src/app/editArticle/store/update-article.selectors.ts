import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UPDATE_ARTICLE_FEATURE_KEY } from './update-article.reducer';
import { IEditArticleState } from '../types/editArticleState.interface';

const editArticleFeatureSelector = createFeatureSelector<IEditArticleState>(UPDATE_ARTICLE_FEATURE_KEY)

export const isSubmitingEditSelector = createSelector(
  editArticleFeatureSelector,
  (state: IEditArticleState) => state.isSubmitting
);
export const isLoadingEditSelector = createSelector(
  editArticleFeatureSelector,
  (state: IEditArticleState) => state.isLoading
);
export const articleEditSelector = createSelector(
  editArticleFeatureSelector,
  (state: IEditArticleState) => state.article
);

export const validationErrorsEditSelector = createSelector(
  editArticleFeatureSelector,
  (state: IEditArticleState) => state.validationErrors
);

