import { Component, Input, Output, EventEmitter, inject, OnInit } from '@angular/core';
import { IArticleInput } from '../../../types/articleInput.interface';
import { IBackendErrors } from '../../../../auth/types/backendError.interface';
import { FormBuilder, FormGroup } from '@angular/forms';

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
			title: this.initialValuesProps.title,
			description: this.initialValuesProps.description,
			tagList: this.initialValuesProps.tagList.join(' '),
			body: this.initialValuesProps.body
		})
	}

	onSubmit(): void {
		this.articleSubmitEvent.emit(this.form.value)
	}
}
