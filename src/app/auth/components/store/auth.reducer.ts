import { Action, createFeature, createReducer, on } from "@ngrx/store";
import { authActions } from './auth.action'
import { IAuthState } from "../../types/authState.interface";

export const authKey = "AUTH" 

export const initialState: IAuthState = {
	isSubmitting: false,
	currentUser: null,
	isLoggedIn: null,
	validationErrors: null
}

export const reducer = createReducer(
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

console.log(reducer);


export const authFeature = createFeature({
  name: authKey,
  reducer: reducer,
});

export function authReducer(state: IAuthState, action: Action) {
  return reducer(state, action);
}