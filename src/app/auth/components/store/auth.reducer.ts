import { createFeature, createReducer, on } from "@ngrx/store";
import { authActions } from './auth.action'
import { IAuthState } from "../../types/authState.interface";
import { loginActions } from "./login.action";

export const authKey = "AUTH" 

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
	on(authActions.authRegisterSuccess, (state, action): IAuthState => ({
			...state,
			currentUser: action.currentUser,
			isLoggedIn: true,
			isSubmitting: false,
		})
	),
	on(authActions.authRegisterFailure, (state, action): IAuthState => ({
			...state,
			validationErrors: action.errors,
			isSubmitting: true,
		})
	),
	on(loginActions.authLogin, (state): IAuthState => ({
			...state,
			isSubmitting: true,
			validationErrors: null
		})
	),
	on(loginActions.authLoginSuccess, (state, action): IAuthState => ({
			...state,
			currentUser: action.currentUser,
			isLoggedIn: true,
			isSubmitting: false
		})
	),
	on(loginActions.authLoginFailure, (state, action): IAuthState => ({
			...state,
			validationErrors: action.errors,
			isSubmitting: false
		})
	)
)

export const authFeature = createFeature({
  name: authKey,
  reducer: authReducer,
});
