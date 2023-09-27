import { createActionGroup, props } from '@ngrx/store';

import { ICurrentUser } from '../../shared/types/currentUser.interface';
import { IBackendErrors } from '../../shared/types/backendError.interface';
import { ILoginRequest } from '../types/loginRequest.interface';


export const loginActions = createActionGroup({
  source: 'Auth',
  events: {
    'Auth Login': props<{ request: ILoginRequest }>(),
    'Auth Login Success': props<{ currentUser: ICurrentUser }>(),
    'Auth Login Failure': props<{ errors: IBackendErrors }>(),
  }
});