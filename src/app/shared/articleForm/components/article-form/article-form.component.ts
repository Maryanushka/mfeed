import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IArticleInput } from '../../../types/articleInput.interface';
import { IBackendErrors } from '../../../../auth/types/backendError.interface';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent {
	@Input('initialValues') initialValuesProps: IArticleInput
	@Input('isSubmitting') isSubmittigProps: boolean
	@Input('errors') errorsProps: IBackendErrors | null

	@Output('articleSubmit') articleSubmitEvent = new EventEmitter<IArticleInput>

}
