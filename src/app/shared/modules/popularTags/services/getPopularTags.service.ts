import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { IGetPopularTagsResponse } from '../types/getPopularTagsResponse';
import { PopularTagType } from '../../../types/popularTagType';

@Injectable({
  providedIn: 'root'
})
export class GetPopularTagsService {

	constructor(private http: HttpClient) {}

  getPopularTags(): Observable<PopularTagType[]>{
		const url = `${environment.apiUrl}/tags`
		return this.http.get<IGetPopularTagsResponse>(url).pipe(map((responce: IGetPopularTagsResponse) => responce.tags))
	 }
}
