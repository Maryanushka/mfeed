import { Action } from '@ngrx/store';

import * as CreateArticleActions from './create-article.actions';
import { CreateArticleEntity } from './create-article.models';
import { CreateArticleState, initialCreateArticleState, createArticleReducer } from './create-article.reducer';

describe('CreateArticle Reducer', () => {
  const createCreateArticleEntity = (id: string, name = ''): CreateArticleEntity => ({
    id,
    name: name || `name-${id}`
  });

  describe('valid CreateArticle actions', () => {
    it('loadCreateArticleSuccess should return the list of known CreateArticle', () => {
      const createArticle = [
        createCreateArticleEntity('PRODUCT-AAA'),
        createCreateArticleEntity('PRODUCT-zzz')
      ];
      const action = CreateArticleActions.loadCreateArticleSuccess({ createArticle });

      const result: CreateArticleState = createArticleReducer(initialCreateArticleState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = createArticleReducer(initialCreateArticleState, action);

      expect(result).toBe(initialCreateArticleState);
    });
  });
});
