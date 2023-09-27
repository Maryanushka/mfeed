import { createActionGroup, props } from '@ngrx/store';
import { IArticle } from '../../shared/types/article.interface';
import { IArticleInput } from '../../shared/types/articleInput.interface';
import { IBackendErrors } from '../../shared/types/backendError.interface';

export const createArticleActions = createActionGroup({
  source: 'CreateArticle',
  events: {
    'Create Article': props<{ articleInput: IArticleInput }>(),
    'Create Article Success': props<{ article: IArticle }>(),
    'Create Article Failure': props<{ validationErrors: IBackendErrors }>(),
  }
});