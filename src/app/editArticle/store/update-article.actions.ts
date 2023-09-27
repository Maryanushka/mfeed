import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IArticle } from '../../shared/types/article.interface';
import { IArticleInput } from '../../shared/types/articleInput.interface';
import { IBackendErrors } from '../../shared/types/backendError.interface';

export const updateArticleActions = createActionGroup({
  source: 'EditArticle',
  events: {
    'Update Article': props<{slug: string; articleInput: IArticleInput }>(),
    'Update Article Success': props<{ article: IArticle }>(),
    'Update Article Failure': props<{ validationErrors: IBackendErrors }>(),
  }
});

export const getArticleActions = createActionGroup({
  source: 'GetArticle',
  events: {
		'Get Article': props<{slug: string }>(),
    'Get Article Success': props<{ article: IArticle }>(),
    'Get Article Failure': emptyProps(),
  }
});