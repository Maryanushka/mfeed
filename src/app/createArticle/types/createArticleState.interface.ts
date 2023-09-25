import { IBackendErrors } from "../../auth/types/backendError.interface";

export interface ICreateArticleState {
	isSubmitting: boolean
	validationErrors: IBackendErrors | null
}