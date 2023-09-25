import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IArticleInput } from '../../shared/types/articleInput.interface';
import { IArticle } from '../../shared/types/article.interface';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ISaveArticleResponse } from '../../shared/types/saveArticleResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class CreateArticleService {

	private http = inject(HttpClient)

  createArticle(articleInput: IArticleInput): Observable<IArticle> {
		const url = `${environment.apiUrl}/articles/`

		return this.http.post<ISaveArticleResponse>(url, articleInput).pipe(
			map((respose: ISaveArticleResponse) => respose.article)
		)
	}
}
