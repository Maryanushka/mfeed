import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IProfile } from '../../shared/types/profile.interface';
import { environment } from '../../../environments/environment';
import { IGetUserProfileResponse } from '../types/getUserProfile.interface';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  private http: HttpClient = inject(HttpClient);

	getUserProfile(slug: string): Observable<IProfile> {
		const url = `${environment.apiUrl}/profiles/${slug}`;
		return this.http.get<IGetUserProfileResponse>(url).pipe(map((response: IGetUserProfileResponse) => response.profile));
	}


}
