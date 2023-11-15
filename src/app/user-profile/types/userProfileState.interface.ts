import { IProfile } from "../../shared/types/profile.interface"

export interface IUserProfileState {
	isLoading: boolean
	error: string | null
	data: IProfile | null
}