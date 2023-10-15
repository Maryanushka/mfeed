import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { IArticle } from "../../../types/article.interface";

export const addToFavoritesActions = createActionGroup({
  source: 'AddToFavorites',
  events: {
    'AddToFavorites': props<{ isFavorited: boolean, slug: string }>(),
    'AddToFavorites Success': props<{ article: IArticle }>(),
    'AddToFavorites Failure': emptyProps(),
  }
});