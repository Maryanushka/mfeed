import { IBackendErrors } from "src/app/shared/types/backendError.interface";

export interface ISettingsState {
	isSubmitting: boolean,
	validationErrors: IBackendErrors | null
}