import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { IGetFeedResponce } from "../types/getFeedResponce.interface";

export const getFeedActions = createActionGroup({
  source: 'Feed',
  events: {
    'Get Feed': props<{ url: string }>(),
    'Get Feed Success': props<{ feed: IGetFeedResponce }>(),
    'Get Feed Failure': emptyProps(),
  }
});