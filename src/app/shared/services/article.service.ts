import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IGetArticleResponse } from '../types/getArticleResponse.interface';
import { IArticle } from '../types/article.interface';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

	getArticle(slug: string): Observable<IArticle> {
		const url = `${environment.apiUrl}/articles/${slug}`

		return this.http.get<IGetArticleResponse>(url).pipe(map((response: IGetArticleResponse) => response.article) )
	}
}
