import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateArticleComponent } from './components/create-article/create-article.component';
import { RouterModule } from '@angular/router';
import { ArticleFormModule } from '../shared/articleForm/articleForm.module';
import { CreateArticleService } from './services/createArticle.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromCreateArticle from './store/create-article.reducer';
import { CreateArticleEffects } from './store/create-article.effects';

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
		RouterModule.forChild(routes),
		StoreModule.forFeature(fromCreateArticle.createAticleFeature),
		EffectsModule.forFeature([CreateArticleEffects])
  ],
	providers: [
		CreateArticleService
	]
})
export class CreateArticleModule { }
