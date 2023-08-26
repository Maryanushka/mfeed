import { Action, createFeature, createReducer, on } from "@ngrx/store";
import { authActions } from './auth.action'
import { IAuthState } from "../../types/authState.interface";

export const AUTH_KEY = "AUTH" 

export const initialState: IAuthState = {
	isSubmitting: false,
	currentUser: null,
	isLoggedIn: null,
	validationErrors: null
}

export const authReducer = createReducer(
	initialState, 
	on(authActions.authRegister, (state): IAuthState => ({
			...state,
			isSubmitting: true,
			validationErrors: null
		})
	),
	on(authActions.authRegisterSuccess, (state, {currentUser}): IAuthState => ({
			...state,
			currentUser,
			isLoggedIn: true,
			isSubmitting: false,
		})
	),
	on(authActions.authRegisterFailure, (state, {validationErrors}): IAuthState => ({
			...state,
			validationErrors,
			isSubmitting: false,
		})
	),
)