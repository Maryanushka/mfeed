import { createFeature, createReducer, on } from "@ngrx/store";
import * as registerActions from '../actions/auth.action'
import { IAuthState } from "../../../types/authState.interface";

export const authKey = "AUTH" 

export const initialState: IAuthState = {
	isSubmitting: false
}

export const authReducer = createReducer(
	initialState, 
	on(registerActions.registerAction, (state): IAuthState => ({
			...state,
			isSubmitting: true
		})
	)
)

export const authFeature = createFeature({
  name: authKey,
  reducer: authReducer,
});
