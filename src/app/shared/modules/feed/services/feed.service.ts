import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IGetFeedResponce } from '../types/getFeedResponce.interface';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  constructor(private http: HttpClient) { }

	getFeed(url: string): Observable<IGetFeedResponce> {
		const fullUrl = `${environment.apiUrl}${url}`
		return this.http.get<IGetFeedResponce>(fullUrl)
	}
}
