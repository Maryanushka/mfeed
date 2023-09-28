import { Injectable, inject } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";

import { updateCurrentUserActions } from "src/app/auth/store/updateCurrentUser.action";
import { AuthService } from "src/app/auth/services/auth/auth.service";
import { ICurrentUser } from "src/app/shared/types/currentUser.interface";


@Injectable()
export class UpdateCurrentUserEffects {
	
	private actions$ = inject(Actions)
	private authService = inject(AuthService)



	updateCurrentUser$ = createEffect(() => this.actions$.pipe(
		ofType(updateCurrentUserActions.authUpdateCurrentUser),
		switchMap(({currentUserInput}) => {
			return this.authService.updateCurrentUser(currentUserInput).pipe(
				map((currentUser: ICurrentUser) => {
					return updateCurrentUserActions.authUpdateCurrentUserSuccess({currentUser})
				}),
				catchError((errrorResponse: HttpErrorResponse) => {
					return of(updateCurrentUserActions.authUpdateCurrentUserFailure({errors: errrorResponse.error.errors}))
				})
			)
		})
	))

}