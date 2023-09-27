import { Component, Input, Output, EventEmitter, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IArticleInput } from '../../../../types/articleInput.interface';
import { IBackendErrors } from '../../../../types/backendError.interface';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit {
	@Input('initialValues') initialValuesProps: IArticleInput
	@Input('isSubmitting') isSubmittigProps: boolean
	@Input('errors') errorsProps: IBackendErrors | null

	@Output('articleSubmit') articleSubmitEvent = new EventEmitter<IArticleInput>()

	private fb = inject(FormBuilder)

	form: FormGroup

	ngOnInit(): void {
		this.initializeForm()
	}

	initializeForm(): void {
		this.form = this.fb.group({
			title: this.initialValuesProps.article.title,
			description: this.initialValuesProps.article.description,
			tagList: this.initialValuesProps.article.tagList.join(' '),
			body: this.initialValuesProps.article.body
		})
	}

	onSubmit(): void {
		this.articleSubmitEvent.emit({article: this.form.value})
	}
}
