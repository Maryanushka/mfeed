import { createFeatureSelector, createSelector } from "@ngrx/store";

import { ISettingsState } from "../types/settingsState.interface";
import { SETTINGS_KEY } from "./reducers";

export const settingsState = createFeatureSelector<ISettingsState>(SETTINGS_KEY)

export const isSubmittingSelector = createSelector(
	settingsState, 
	(settingsState: ISettingsState) => settingsState.isSubmitting
)
export const validatonErrorSelector = createSelector(
	settingsState, 
	(settingsState: ISettingsState) => settingsState.validationErrors
)