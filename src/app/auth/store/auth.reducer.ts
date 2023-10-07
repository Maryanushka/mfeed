import { createFeature, createReducer, on } from "@ngrx/store";
import { authActions } from './regiter.action'
import { IAuthState } from "../types/authState.interface";
import { loginActions } from "./login.action";
import { getCurrentUserActions } from "./getCurrentUser.action";
import { updateCurrentUserActions } from "./updateCurrentUser.action";
import { logoutAction } from "./sync.action";

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
	// register
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
	// login
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
	// get current user
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
	on(getCurrentUserActions.authGetCurrentUserFailure, (state, action): IAuthState => ({
			...state,
			currentUser: null,
			isLoggedIn: false,
			isLoading: false
		}) 
	),
	on(logoutAction, (): IAuthState => ({
			...initialState ,
			isLoggedIn:false
		})
	),
	// update current user
	on(updateCurrentUserActions.authUpdateCurrentUserSuccess, (state, action): IAuthState => ({
			...state,
			currentUser: action.currentUser,
		})
	),
	on(updateCurrentUserActions.authUpdateCurrentUserFailure, (state, action): IAuthState => ({
			...state,
			validationErrors: action.errors
		})
	),
)

export const authFeature = createFeature({
  name: authKey,
  reducer: authReducer,
});
