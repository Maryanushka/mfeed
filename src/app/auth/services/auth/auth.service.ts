import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAuthRequest } from '../../types/authRequest.interface';
import { Observable, map, of } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ICurrentUser } from '../../../shared/types/currentUser.interface';
import { IAuthResponce } from '../../types/authResponce.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

	register(data: IAuthResponce): Observable<ICurrentUser> {
		const url = `${environment.apiUrl}/users`
		console.log(data);
		
		return this.http
		.post<IAuthResponce>(url, data)
		.pipe(map((responce: IAuthResponce) => {
			console.log(responce);
			
			return responce.user
		}))
		
	}
}
