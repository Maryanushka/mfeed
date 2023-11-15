import { createFeatureSelector, createSelector } from "@ngrx/store"
import { IUserProfileState } from "../types/userProfileState.interface"
import { USER_PROFILE_KEY } from "./getUserProfile.reducer"

export const userProfileFeatureSelector = createFeatureSelector<IUserProfileState>(USER_PROFILE_KEY)

export const userProfileIsLoadingSelector = createSelector(
	userProfileFeatureSelector, 
	(userProfileState: IUserProfileState) => userProfileState.isLoading
)
export const userProfileDataSelector = createSelector(
	userProfileFeatureSelector, 
	(userProfileState: IUserProfileState) => userProfileState.data
)
export const userProfileErrorSelector = createSelector(
	userProfileFeatureSelector, 
	(userProfileState: IUserProfileState) => userProfileState.error
)