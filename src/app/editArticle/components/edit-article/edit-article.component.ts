import { Component, OnInit } from '@angular/core';

import { Observable, filter, map } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { IArticleInput } from '../../../shared/types/articleInput.interface';
import { IBackendErrors } from '../../../shared/types/backendError.interface';
import { isSubmitingEditSelector, validationErrorsEditSelector, articleEditSelector, isLoadingEditSelector } from '../../store/update-article.selectors';
import { updateArticleActions, getArticleActions } from '../../store/update-article.actions';
import { ActivatedRoute } from '@angular/router';
import { IArticle } from '../../../shared/types/article.interface';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
})
export class EditArticleComponent implements OnInit {

	initialValues$: Observable<IArticleInput>
	slug: string

	isSubmitting$: Observable<boolean>
	isLoading$: Observable<boolean>
	backendErrors$: Observable<IBackendErrors | null>

	constructor(private store: Store, private route: ActivatedRoute) {}

	ngOnInit(): void {
		this.initializeValues()
		this.fetchData()
		
	}
	initializeValues(): void {
		this.backendErrors$ = this.store.pipe(select(validationErrorsEditSelector))
		this.isSubmitting$ = this.store.pipe(select(isSubmitingEditSelector))
		this.isLoading$ = this.store.pipe(select(isLoadingEditSelector))
		this.slug = this.route.snapshot.paramMap.get('slug')
		this.initialValues$ = this.store.pipe(
			select(articleEditSelector), 
			filter(Boolean), 
			map((article: IArticle) => {
				console.log(article);
			
				return {
					article: {
						title: article.title,
						description: article.description,
						body: article.body,
						tagList: article.tagList
					}
				}
		}))
	}

	fetchData(): void {
		this.store.dispatch(getArticleActions.getArticle({slug: this.slug}))
	}

	onSubmit(articleInput: IArticleInput) {
		console.log(articleInput);
		
		this.store.dispatch(updateArticleActions.updateArticle({slug: this.slug, articleInput: articleInput }))
		
	}
}
