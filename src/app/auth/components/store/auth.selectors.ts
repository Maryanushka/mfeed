import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IAuthState } from "../../types/authState.interface";
import { AUTH_KEY } from "./auth.reducer";

export const authFeatureSelector = createFeatureSelector<IAuthState>(AUTH_KEY)

export const isSubmittingSelector =  createSelector(
	authFeatureSelector, 
	(authState: IAuthState) => authState.isSubmitting
)