import { Injectable, inject } from "@angular/core";

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";

import { authActions } from "./auth.action";
import { AuthService } from "../../services/auth/auth.service";
import { ICurrentUser } from "../../../shared/types/currentUser.interface";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class AuthEffects {
	
	private actions$ = inject(Actions)
	private authService = inject(AuthService)

	auth$ = createEffect(() => this.actions$.pipe(
		ofType(authActions.authRegister),
		switchMap(({request}) => {
			return this.authService.register(request).pipe(
				map((currentUser: ICurrentUser) => {
					return authActions.authRegisterSuccess({currentUser: currentUser})
				}),
				catchError((errrorResponse: HttpErrorResponse) => {
					return of(authActions.authRegisterFailure({validationErrors: errrorResponse.error.errors}))
				})
			)
		})
	))
}