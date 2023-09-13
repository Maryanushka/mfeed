import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { PopularTagType } from "../../../types/popularTagType";

export const getPopularTagsActions = createActionGroup({
  source: 'Get Popular Tags',
  events: {
    'Get Tags': emptyProps(),
    'Get Tags Success': props<{ popularTags: PopularTagType[] }>(),
    'Get Tags Failure': emptyProps(),
  }
});