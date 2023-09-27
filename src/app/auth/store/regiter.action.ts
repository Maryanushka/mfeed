import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { ICurrentUser } from '../../shared/types/currentUser.interface';
import { IAuthRequest } from 'src/app/auth/types/authRequest.interface';
import { IBackendErrors } from '../../shared/types/backendError.interface';
import { ILoginRequest } from '../types/loginRequest.interface';


export const authActions = createActionGroup({
  source: 'Auth',
  events: {
    'Auth Register': props<{ request: IAuthRequest }>(),
    'Auth Register Success': props<{ currentUser: ICurrentUser }>(),
    'Auth Register Failure': props<{ errors: IBackendErrors }>(),

  }
});