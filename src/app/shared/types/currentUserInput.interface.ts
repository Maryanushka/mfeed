import { ICurrentUser } from "./currentUser.interface";

export interface ICurrentUserInput{
	user: {
		password: string 
		email: string,
		username: string,
		bio: string | null,
		image: string | null,
		token: string
	}
}