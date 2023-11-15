import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { IProfile } from "../../shared/types/profile.interface";

export const getUserProfile = createActionGroup({
  source: 'User Profile',
  events: {
    'Get User Profile': props<{ slug: string }>(),
    'Get User Profile Success': props<{ userProfile: IProfile }>(),
    'Get User Profile Failure': emptyProps(),
  }
});
