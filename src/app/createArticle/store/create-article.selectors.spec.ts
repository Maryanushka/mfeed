import { CreateArticleEntity } from './create-article.models';
import { createArticleAdapter, CreateArticlePartialState, initialCreateArticleState } from './create-article.reducer';
import * as CreateArticleSelectors from './create-article.selectors';

describe('CreateArticle Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getCreateArticleId = (it: CreateArticleEntity) => it.id;
  const createCreateArticleEntity = (id: string, name = '') => ({
    id,
    name: name || `name-${id}`
  }) as CreateArticleEntity;

  let state: CreateArticlePartialState;

  beforeEach(() => {
    state = {
      createArticle: createArticleAdapter.setAll([
        createCreateArticleEntity('PRODUCT-AAA'),
        createCreateArticleEntity('PRODUCT-BBB'),
        createCreateArticleEntity('PRODUCT-CCC')
      ], {
        ...initialCreateArticleState,
        selectedId : 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      })
    };
  });

  describe('CreateArticle Selectors', () => {
    it('selectAllCreateArticle() should return the list of CreateArticle', () => {
      const results = CreateArticleSelectors.selectAllCreateArticle(state);
      const selId = getCreateArticleId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectEntity() should return the selected Entity', () => {
      const result = CreateArticleSelectors.selectEntity(state) as CreateArticleEntity;
      const selId = getCreateArticleId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectCreateArticleLoaded() should return the current "loaded" status', () => {
      const result = CreateArticleSelectors.selectCreateArticleLoaded(state);

      expect(result).toBe(true);
    });

    it('selectCreateArticleError() should return the current "error" state', () => {
      const result = CreateArticleSelectors.selectCreateArticleError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
