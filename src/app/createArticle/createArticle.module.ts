import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateArticleComponent } from './components/create-article/create-article.component';
import { RouterModule } from '@angular/router';
import { CreateArticleService } from './services/createArticle.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CreateArticleEffects } from './store/create-article.effects';
import { ArticleFormModule } from '../shared/modules/articleForm/articleForm.module';
import { createAticleFeature } from './store/create-article.reducer';

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
		StoreModule.forFeature(createAticleFeature),
		EffectsModule.forFeature([CreateArticleEffects])
  ],
	providers: [
		CreateArticleService
	]
})
export class CreateArticleModule { }
