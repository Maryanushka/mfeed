import { PopularTagType } from "../../../types/popularTagType";

export interface IPopularState {
	data: PopularTagType[] | null,
	error: string | null,
	isLoading: boolean
}