import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as CreateArticleActions from './create-article.actions';
import { CreateArticleEntity } from './create-article.models';
import { createArticleActions } from './create-article.actions';

export const CREATE_ARTICLE_FEATURE_KEY = 'createArticle';

export interface CreateArticleState extends EntityState<CreateArticleEntity> {
  selectedId?: string | number; // which CreateArticle record has been selected
  loaded: boolean; // has the CreateArticle list been loaded
  error?: string | null; // last known error (if any)
}

export interface CreateArticlePartialState {
  readonly [CREATE_ARTICLE_FEATURE_KEY]: CreateArticleState;
}

export const createArticleAdapter: EntityAdapter<CreateArticleEntity> = createEntityAdapter<CreateArticleEntity>();

export const initialCreateArticleState: CreateArticleState = createArticleAdapter.getInitialState({
  // set initial required properties
  loaded: false
});

const reducer = createReducer(
  initialCreateArticleState,
  on(createArticleActions.createArticle,
    state => ({ ...state, loaded: false, error: null })
  ),
  on(createArticleActions.createArticleSuccess,
    (state, { article }) => createArticleAdapter.setAll(article, { ...state, loaded: true })
  ),
  on(createArticleActions.createArticleFailure,
    (state, { errors }) => ({ ...state, errors })
  ),
);

export function createArticleReducer(state: CreateArticleState | undefined, action: Action) {
  return reducer(state, action);
}
