import { createFeature, createReducer, on } from "@ngrx/store";
import { ISettingsState } from "../types/settingsState.interface";
import { updateCurrentUserActions } from "../../auth/store/updateCurrentUser.action";

export const SETTINGS_KEY = 'SETTINGS';

const initialState: ISettingsState = {
	isSubmitting: false,
	validationErrors: null
}

const settingsReducer = createReducer(
	initialState,
	on(updateCurrentUserActions.authUpdateCurrentUser, (state): ISettingsState => ({
			...state,
			isSubmitting: true
		})
	),
	on(updateCurrentUserActions.authUpdateCurrentUserSuccess, (state): ISettingsState => ({
			...state,
			isSubmitting: false,
		})
	),
	on(updateCurrentUserActions.authUpdateCurrentUserFailure, (state, action): ISettingsState => ({
			...state,
			isSubmitting: false,
			validationErrors: action.errors
		})
	),
	
)

export const settingsFeature = createFeature({
  name: SETTINGS_KEY,
  reducer: settingsReducer,
});
