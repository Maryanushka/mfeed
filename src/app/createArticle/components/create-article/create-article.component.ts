import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { IArticleInput } from '../../../shared/types/articleInput.interface';
import { IBackendErrors } from '../../../shared/types/backendError.interface';
import { isSubmitingCASelector, validationErrorsCASelector } from '../../store/create-article.selectors';
import { createArticleActions } from '../../store/create-article.actions';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {

	initialValues: IArticleInput = {
		article: {
			title: '',
			description: '',
			body: '',
			tagList: []
		}
	}


	isSubmitting$: Observable<boolean>
	backendErrors$: Observable<IBackendErrors | null>

	constructor(private store: Store) {}

	ngOnInit(): void {
		this.isSubmitting$ = this.store.pipe(select(isSubmitingCASelector))
		this.backendErrors$ = this.store.pipe(select(validationErrorsCASelector))
	}

	onSubmit(articleInput: IArticleInput) {
		console.log(articleInput);
		
		this.store.dispatch(createArticleActions.createArticle({articleInput}))
		
	}
}
