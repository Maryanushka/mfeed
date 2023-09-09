import { IGetFeedResponce } from "./getFeedResponce.interface";

export interface IFeedState {
	isLoading: boolean
	error: string | null
	data: IGetFeedResponce | null
}