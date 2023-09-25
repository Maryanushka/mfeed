import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CREATE_ARTICLE_FEATURE_KEY, CreateArticleState, createArticleAdapter } from './create-article.reducer';

// Lookup the 'CreateArticle' feature state managed by NgRx
export const selectCreateArticleState = createFeatureSelector<CreateArticleState>(CREATE_ARTICLE_FEATURE_KEY);

const { selectAll, selectEntities } = createArticleAdapter.getSelectors();

export const selectCreateArticleLoaded = createSelector(
  selectCreateArticleState,
  (state: CreateArticleState) => state.loaded
);

export const selectCreateArticleError = createSelector(
  selectCreateArticleState,
  (state: CreateArticleState) => state.error
);

export const selectAllCreateArticle = createSelector(
  selectCreateArticleState,
  (state: CreateArticleState) => selectAll(state)
);

export const selectCreateArticleEntities = createSelector(
  selectCreateArticleState,
  (state: CreateArticleState) => selectEntities(state)
);

export const selectSelectedId = createSelector(
  selectCreateArticleState,
  (state: CreateArticleState) => state.selectedId
);

export const selectEntity = createSelector(
  selectCreateArticleEntities,
  selectSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
