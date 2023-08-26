import { Injectable, inject } from "@angular/core";

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap } from "rxjs";

import { authActions } from "./auth.action";
import { AuthService } from "../../services/auth/auth.service";
import { ICurrentUser } from "../../../shared/types/currentUser.interface";
import { HttpErrorResponse } from "@angular/common/http";
import { PersistanceService } from "../../../shared/services/persistance.service";
import { Router } from "@angular/router";

@Injectable()
export class AuthEffects {
	
	private actions$ = inject(Actions)
	private authService = inject(AuthService)
	private presstanceService = inject(PersistanceService)
	private router = inject(Router)

	auth$ = createEffect(() => this.actions$.pipe(
		ofType(authActions.authRegister),
		switchMap(({request}) => {
			return this.authService.register(request).pipe(
				map((currentUser: ICurrentUser) => {
					this.presstanceService.set('accessToken', currentUser.token)
					return authActions.authRegisterSuccess({currentUser})
				}),
				catchError((errrorResponse: HttpErrorResponse) => {
					return of(authActions.authRegisterFailure({errors: errrorResponse.error.errors}))
				})
			)
		})
	))

	redirectAfterSubmitting$ = createEffect(
		() => this.actions$.pipe(
			ofType(authActions.authRegisterSuccess),
			tap(() => {
				console.log('success');
				this.router.navigateByUrl('/')
			})
		),
		{dispatch: false}
	)
}