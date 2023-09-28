import { createActionGroup, props } from '@ngrx/store';

import { ICurrentUser } from 'src/app/shared/types/currentUser.interface';
import { IBackendErrors } from 'src/app/shared/types/backendError.interface';
import { ICurrentUserInput } from 'src/app/shared/types/currentUserInput.interface';


export const updateCurrentUserActions = createActionGroup({
  source: 'Auth',
  events: {
    'Auth Update Current User': props<{ currentUserInput: ICurrentUserInput }>(),
    'Auth Update Current User Success': props<{ currentUser: ICurrentUser }>(),
    'Auth Update Current User Failure': props<{ errors: IBackendErrors }>(),
  }
});