import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as CreateArticleActions from './create-article.actions';
import { CreateArticleEffects } from './create-article.effects';

describe('CreateArticleEffects', () => {
  let actions: Observable<Action>;
  let effects: CreateArticleEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        CreateArticleEffects,
        provideMockActions(() => actions),
        provideMockStore()
      ],
    });

    effects = TestBed.inject(CreateArticleEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: CreateArticleActions.initCreateArticle() });

      const expected = hot('-a-|', { a: CreateArticleActions.loadCreateArticleSuccess({ createArticle: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
