import { IArticle } from "../../../types/article.interface"

export interface IGetFeedResponce {
	articles: IArticle[]
	articlesCount: number
}