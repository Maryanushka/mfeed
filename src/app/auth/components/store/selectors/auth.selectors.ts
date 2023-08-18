import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IAuthState } from "../../../types/authState.interface";
import { authKey } from "../reducers/auth.reducer";

export const authFeatureSelector = createFeatureSelector<IAuthState>(authKey)

export const isSubmittingSelector =  createSelector(
	authFeatureSelector, 
	(authState: IAuthState) => authState.isSubmitting
)