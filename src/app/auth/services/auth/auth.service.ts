import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IAuthRequest } from '../../types/authRequest.interface';
import { Observable, map, of } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ICurrentUser } from '../../../shared/types/currentUser.interface';
import { IAuthResponce } from '../../types/authResponce.interface';
import { ILoginRequest } from '../../types/loginRequest.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
	http = inject(HttpClient)

	getUser(responce: IAuthResponce): ICurrentUser {
		return responce.user
	}
	
	register(data: IAuthRequest): Observable<ICurrentUser> {
		const url = `${environment.apiUrl}/users`
		
		return this.http
		.post<IAuthResponce>(url, data)
		.pipe(map(this.getUser))
	}

	login(data: ILoginRequest): Observable<ICurrentUser> {
		const url = `${environment.apiUrl}/users/login`
		
		return this.http
		.post<IAuthResponce>(url, data)
		.pipe(map(this.getUser))
	}

	getCurrentUser(): Observable<ICurrentUser> {
		const url = `${environment.apiUrl}/user`
		
		return this.http
		.get<IAuthResponce>(url)
		.pipe(map(this.getUser))
	}

}
