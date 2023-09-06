import { Injectable, inject } from "@angular/core";

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap } from "rxjs";

import { loginActions } from "./login.action";
import { AuthService } from "../services/auth/auth.service";
import { ICurrentUser } from "../../shared/types/currentUser.interface";
import { HttpErrorResponse } from "@angular/common/http";
import { PersistanceService } from "../../shared/services/persistance.service";
import { Router } from "@angular/router";

@Injectable()
export class LoginEffects {
	
	private actions$ = inject(Actions)
	private authService = inject(AuthService)
	private presstanceService = inject(PersistanceService)
	private router = inject(Router)


	login$ = createEffect(() => this.actions$.pipe(
		ofType(loginActions.authLogin),
		switchMap(({request}) => {
			return this.authService.login(request).pipe(
				map((currentUser: ICurrentUser) => {
					this.presstanceService.set('accessToken', currentUser.token)
					return loginActions.authLoginSuccess({currentUser})
				}),
				catchError((errrorResponse: HttpErrorResponse) => {
					return of(loginActions.authLoginFailure({errors: errrorResponse.error.errors}))
				})
			)
		})
	))


	redirectAfterSubmitting$ = createEffect(
		() => this.actions$.pipe(
			ofType(loginActions.authLoginSuccess),
			tap(() => {
				console.log('success');
				this.router.navigateByUrl('/')
			})
		),
		{dispatch: false}
	)
}