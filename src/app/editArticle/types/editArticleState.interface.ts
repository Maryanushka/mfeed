import { IArticle } from "../../shared/types/article.interface";
import { IBackendErrors } from "../../shared/types/backendError.interface";

export interface IEditArticleState {
	isSubmitting: boolean
	validationErrors: IBackendErrors | null,
	isLoading: boolean,
	article: IArticle | null
}