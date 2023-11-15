import { createFeature, createReducer, on } from "@ngrx/store";
import { IArticleState } from "../../article/types/articleState.interface";
import { getArticleActions } from "../../article/store/getArticle.action";
import { routerNavigatedAction } from "@ngrx/router-store";
import { getUserProfile } from "./getUserProfile.action";
import { IUserProfileState } from "../types/userProfileState.interface";

export const USER_PROFILE_KEY = "USER_PROFILE"

const initialState: IUserProfileState = {
	isLoading: true,
	error: null,
	data: null
}

export const userProfileReducer = createReducer(
	initialState,
	on(getUserProfile.getUserProfile, (state): IUserProfileState => state),
	on(getUserProfile.getUserProfileSuccess, (state, action): IUserProfileState => ({
			...state,
			isLoading: false,
			data: action.userProfile
		})
	),
	on(getUserProfile.getUserProfileFailure, (state): IUserProfileState => ({
			...state,
			isLoading: false
		})
	),
)

export const userProfileFeature = createFeature({
  name: USER_PROFILE_KEY,
  reducer: userProfileReducer,
});