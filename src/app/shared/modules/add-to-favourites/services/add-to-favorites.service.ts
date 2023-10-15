import { Injectable, inject } from '@angular/core';
import { IArticle } from '../../../types/article.interface';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import {HttpClient} from '@angular/common/http'
import { IGetArticleResponse } from '../../../types/getArticleResponse.interface';
@Injectable({
  providedIn: 'root'
})
export class AddToFavoritesService {

  constructor() { }

	private http = inject(HttpClient)

	addtoFaforites(slug: string): Observable<IArticle> {
		const url = this.getUrl(slug)
		return this.http.post(url, {}).pipe( map(this.getArticle))
	}

	removeFromFavourites(slug: string): Observable<IArticle> {
		const url = this.getUrl(slug)
		return this.http.delete(url).pipe( map(this.getArticle))
	}

	getUrl(slug: string): string {
		return `${environment.apiUrl}/articles/${slug}/favorite`
	}

	getArticle(responce: IGetArticleResponse): IArticle {
		return responce.article
	}
}
