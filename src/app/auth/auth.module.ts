import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";

import { RegisterComponent } from "src/app/auth/components/register/register.component";
import { LoginComponent } from 'src/app/auth/components/login/login.component'; 

import { BackendErrorMessagesModule } from "src/app/shared/modules/backendErrorMessages/backendErrorMessages.module";

import { PersistanceService } from "src/app/shared/services/persistance.service";

import { AuthService } from "src/app/auth/services/auth/auth.service";
import { authFeature } from "src/app/auth/store/auth.reducer";
import { RegisterEffects } from "src/app/auth/store/register.effects";
import { LoginEffects } from "src/app/auth/store/login.effects";
import { GetCurrentUserEffects } from "src/app/auth/store/getCurrentUser.effects";
import { UpdateCurrentUserEffects } from "src/app/auth/store/updateCurrentUser.effects";
import { LogoutEffect } from "./store/logout.effects";

const routes: Routes = [
	{
		path: 'register',
		component: RegisterComponent
	},
	{
		path: 'login',
		component: LoginComponent
	},
]

@NgModule({
	imports: [
		CommonModule, 
		RouterModule.forChild(routes),
		MatInputModule,
		MatFormFieldModule,
		ReactiveFormsModule,
		MatButtonModule,
		BackendErrorMessagesModule,
		ReactiveFormsModule,
		EffectsModule.forFeature([
			RegisterEffects, 
			LoginEffects, 
			GetCurrentUserEffects, 
			UpdateCurrentUserEffects,
			LogoutEffect
		]),
		StoreModule.forFeature(authFeature)
	],
	declarations: [
		RegisterComponent,
		LoginComponent
	],
	providers: [
		AuthService,
		PersistanceService
	]
})

export class AuthModule {

}