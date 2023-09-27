import { IBackendErrors } from "../../shared/types/backendError.interface";

export interface ICreateArticleState {
	isSubmitting: boolean
	validationErrors: IBackendErrors | null
}