import { createAction, createActionGroup, props } from '@ngrx/store';

import { ActionTypes } from '../actionTypes';
import { IAuthRequest } from 'src/app/auth/types/authRequest.interface';
import { ICurrentUser } from '../../../../shared/types/currentUser.interface';

export const registerAction = createAction(
	ActionTypes.REGISTER, 
	props<IAuthRequest>()
)
export const UserActions = createActionGroup({
  source: 'User',
  events: {
    '[Auth] Register': props<IAuthRequest>(),
    '[Auth] Register success': props<{ currentuser: ICurrentUser }>(),
    '[Auth] Register failure': props<{ error: unknown }>(),
  }
});