import { createFeature, createReducer, on } from "@ngrx/store";
import { authActions } from './regiter.action'
import { IAuthState } from "../types/authState.interface";
import { loginActions } from "./login.action";
import { getCurrentUserActions } from "./getCurrentUser.action";

export const authKey = "AUTH" 

export const initialState: IAuthState = {
	isSubmitting: false,
	currentUser: null,
	isLoggedIn: null,
	validationErrors: null,
	isLoading: false,
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
			isSubmitting: false,
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
	),
	on(getCurrentUserActions.authGetCurrentUser, (state): IAuthState => ({
			...state,
			isLoading: true
		}) 
	),
	on(getCurrentUserActions.authGetCurrentUserSuccess, (state, action): IAuthState => ({
			...state,
			currentUser: action.currentUser,
			isLoggedIn: true,
			isLoading: false
		}) 
	),
	on(getCurrentUserActions.authGetCurrentUserFailure, (state): IAuthState => ({
			...state,
			currentUser: null,
			isLoggedIn: false,
			isLoading: false
		}) 
	),
)

export const authFeature = createFeature({
  name: authKey,
  reducer: authReducer,
});
