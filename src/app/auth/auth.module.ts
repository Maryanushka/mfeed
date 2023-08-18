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
import { authFeature } from "./components/store/reducers/auth.reducer";

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
		StoreModule.forFeature(authFeature)
	],
	declarations: [
		RegisterComponent,
		LoginComponent
	]
})

export class AuthModule {

}