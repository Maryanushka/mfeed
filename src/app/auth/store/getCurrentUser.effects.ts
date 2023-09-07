import { Injectable, inject } from "@angular/core";

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";

import { AuthService } from "../services/auth/auth.service";
import { ICurrentUser } from "../../shared/types/currentUser.interface";
import { PersistanceService } from "../../shared/services/persistance.service";
import { getCurrentUserActions } from "./getCurrentUser.action";

@Injectable()
export class GetCurrentUserEffects {
	
	private actions$ = inject(Actions)
	private authService = inject(AuthService)
	private presstanceService = inject(PersistanceService)

	getCurrentUser$ = createEffect(() => this.actions$.pipe(
		ofType(getCurrentUserActions.authGetCurrentUser),
		switchMap(() => {
			const token = this.presstanceService.get('accessToken')
			if(!token) {
				of(getCurrentUserActions.authGetCurrentUserFailure())
			}
			return this.authService.getCurrentUser().pipe(
				map((currentUser: ICurrentUser) => {
					return getCurrentUserActions.authGetCurrentUserSuccess({currentUser})
				}),
				catchError(() => {
					return of(getCurrentUserActions.authGetCurrentUserFailure())
				})
			)
		})
	))
}