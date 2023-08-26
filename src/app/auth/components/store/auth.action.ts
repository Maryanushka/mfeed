import { createActionGroup, props } from '@ngrx/store';

import { ICurrentUser } from '../../../shared/types/currentUser.interface';
import { IAuthRequest } from 'src/app/auth/types/authRequest.interface';
import { IBackendErrors } from '../../types/backendError.interface';


export const authActions = createActionGroup({
  source: 'Auth',
  events: {
    'Auth Register': props<{ request: IAuthRequest }>(),
    'Auth Register Success': props<{ currentUser: ICurrentUser }>(),
    'Auth Register Failure': props<{ errors: IBackendErrors }>(),
  }
});