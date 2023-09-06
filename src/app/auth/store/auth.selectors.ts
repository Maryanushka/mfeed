import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IAuthState } from "../types/authState.interface";
import { authKey } from "./auth.reducer";

export const authFeatureSelector = createFeatureSelector<IAuthState>(authKey)

export const isSubmittingSelector = createSelector(
	authFeatureSelector, 
	(authState: IAuthState) => authState.isSubmitting
)
export const validatonErrorSelector = createSelector(
	authFeatureSelector, 
	(authState: IAuthState) => authState.validationErrors
)
export const isLoggedInSelector = createSelector(
	authFeatureSelector, 
	(authState: IAuthState) => authState.isLoggedIn
)
export const isAnonymousSelector = createSelector(
	authFeatureSelector, 
	(authState: IAuthState) => authState.isLoggedIn === false
)
export const currentUserSelector = createSelector(
	authFeatureSelector, 
	(authState: IAuthState) => authState.currentUser
)