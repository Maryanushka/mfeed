import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateArticleComponent } from './components/create-article/create-article.component';
import { RouterModule } from '@angular/router';
import { ArticleFormModule } from '../shared/articleForm/articleForm.module';

const routes = [
	{
		path: 'articles/new',
		component: CreateArticleComponent
	}
]

@NgModule({
  declarations: [
		CreateArticleComponent
	],
  imports: [
    CommonModule,
		ArticleFormModule,
		RouterModule.forChild(routes)
  ],
})
export class CreateArticleModule { }