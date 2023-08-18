import { createAction, props } from '@ngrx/store';

import { ActionTypes } from '../actionTypes';
import { IAuthRequest } from 'src/app/auth/types/authRequest.interface';

export const registerAction = createAction(
	ActionTypes.REGISTER, 
	props<IAuthRequest>()
)