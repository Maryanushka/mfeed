import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IAuthRequest } from '../../types/authRequest.interface';
import { Observable, map, of } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ICurrentUser } from '../../../shared/types/currentUser.interface';
import { IAuthResponce } from '../../types/authResponce.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
	http = inject(HttpClient)

	register(data: IAuthRequest): Observable<ICurrentUser> {
		const url = `${environment.apiUrl}/users`
		
		return this.http
		.post<IAuthResponce>(url, data)
		.pipe(map((responce: IAuthResponce) => responce.user))
		
	}
}
