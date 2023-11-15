import { Injectable, inject } from "@angular/core";

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { UserProfileService } from "../services/user-profile.service";
import { getUserProfile } from "./getUserProfile.action";
import { IProfile } from "../../shared/types/profile.interface";

@Injectable() 
export class GetUserProfileEffects {

	private actions$ = inject(Actions)
	private userProfileService = inject(UserProfileService)

	getUserProfile$ = createEffect(() => this.actions$.pipe(
		ofType(getUserProfile.getUserProfile),
		switchMap(({slug}) => {
			return this.userProfileService.getUserProfile(slug).pipe(
				map((userProfile: IProfile) => {
					return getUserProfile.getUserProfileSuccess({userProfile})
				}),
				catchError(() => {
					return of(getUserProfile.getUserProfileFailure())
				})
			)
		})
	))
}