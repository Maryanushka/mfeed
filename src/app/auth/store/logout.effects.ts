import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { logoutAction } from "./sync.action";
import { tap } from "rxjs";
import { PersistanceService } from "../../shared/services/persistance.service";
import { Router } from "@angular/router";

@Injectable()
export class LogoutEffect {
	private actions$ = inject(Actions)
	private presstanceService = inject(PersistanceService)
	private router = inject(Router)
	
	logout$ = createEffect(
		() => this.actions$.pipe(
			ofType(logoutAction),
			tap(() => { 
				this.presstanceService.set("accessToken", '')
				this.router.navigateByUrl('/')
				})
		),
		{
			dispatch: false
		}
	)
}
