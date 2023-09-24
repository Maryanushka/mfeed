import { Component } from '@angular/core';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent {
	initialValues = {
		title: 'Foo',
		description: 'Description',
		body: 'Some text',
		tagList: ['firstTag', 'secondTag']
	}

	onSubmit(res: any) {
		console.log(res);
		
	}
}
