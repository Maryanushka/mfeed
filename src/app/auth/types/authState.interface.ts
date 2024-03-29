import { ICurrentUser } from "../../shared/types/currentUser.interface";
import { IBackendErrors } from "../../shared/types/backendError.interface";

export interface IAuthState {
	isSubmitting: boolean,
	currentUser: ICurrentUser | null,
	isLoggedIn: boolean | null,
	validationErrors: IBackendErrors | null,
	isLoading: boolean
}