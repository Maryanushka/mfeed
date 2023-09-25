import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';
import { CreateArticleEntity } from './create-article.models';
import { IArticle } from '../../shared/types/article.interface';
import { IArticleInput } from '../../shared/types/articleInput.interface';
import { IBackendErrors } from '../../auth/types/backendError.interface';

// export const initCreateArticle = createAction(
//   '[CreateArticle Page] Init'
// );

// export const loadCreateArticleSuccess = createAction(
//   '[CreateArticle/API] Load CreateArticle Success',
//   props<{ createArticle: CreateArticleEntity[] }>()
// );

// export const loadCreateArticleFailure = createAction(
//   '[CreateArticle/API] Load CreateArticle Failure',
//   props<{ error: any }>()
// );

export const createArticleActions = createActionGroup({
  source: 'CreateArticle',
  events: {
    'Create Article': props<{ articleInput: IArticleInput }>(),
    'Create Article Success': props<{ article: IArticle }>(),
    'Create Article Failure': props<{ validationErrors: IBackendErrors }>(),
  }
});