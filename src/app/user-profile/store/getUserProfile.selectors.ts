import { createFeatureSelector, createSelector } from "@ngrx/store"
import { ARTICLE_KEY } from "../../article/store/getArtictle.reducer"
import { IUserProfileState } from "../types/userProfileState.interface"

export const userProfileFeatureSelector = createFeatureSelector<IUserProfileState>(ARTICLE_KEY)

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