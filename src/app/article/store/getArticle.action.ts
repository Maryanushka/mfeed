import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { IArticle } from "../../shared/types/article.interface";

export const getArticleActions = createActionGroup({
  source: 'Article',
  events: {
    'Get Article': props<{ slug: string }>(),
    'Get Article Success': props<{ article: IArticle }>(),
    'Get Article Failure': emptyProps(),
  }
});
export const deleteArticleActions = createActionGroup({
  source: 'Delete Article',
  events: {
    'Delete Article': props<{ slug: string }>(),
    'Delete Article Success': emptyProps(),
    'Delete Article Failure': emptyProps(),
  }
});