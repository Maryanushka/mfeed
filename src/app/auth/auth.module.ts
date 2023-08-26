import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { RegisterComponent } from "src/app/auth/components/register/register.component";
import { LoginComponent } from 'src/app/auth/components/login/login.component'; 
import { StoreModule } from "@ngrx/store";
import { authFeature } from "./components/store/auth.reducer";
import { AuthService } from "./services/auth/auth.service";
import { EffectsModule } from "@ngrx/effects";
import { AuthEffects } from "./components/store/auth.effects";

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
		ReactiveFormsModule,
		EffectsModule.forFeature([AuthEffects]),
		StoreModule.forFeature(authFeature)
	],
	declarations: [
		RegisterComponent,
		LoginComponent
	],
	providers: [
		AuthService
	]
})

export class AuthModule {

}