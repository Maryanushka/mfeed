import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { ICurrentUser } from '../../shared/types/currentUser.interface';
import { IBackendErrors } from '../types/backendError.interface';


export const getCurrentUserActions = createActionGroup({
  source: 'Auth',
  events: {
    'Auth Get Current User': emptyProps(),
    'Auth Get Current User Success': props<{ currentUser: ICurrentUser }>(),
    'Auth Get Current User Failure': emptyProps(),
  }
});