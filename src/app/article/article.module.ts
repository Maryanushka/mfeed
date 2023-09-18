import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ArticleComponent } from './components/article/article.component';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { GetArticleEffects } from './store/getArticle.effects';
import { articleFeature } from './store/getArtictle.reducer';
import { ArticleService as SharedArticleService } from '../shared/services/article.service';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const routes = [
	{
		path: 'articles/:slug',
		component: ArticleComponent
	}
]

@NgModule({
  declarations: [
    ArticleComponent
  ],
  imports: [
    CommonModule,
		RouterModule,
		MatProgressBarModule,
		MatSnackBarModule,
		EffectsModule.forFeature([GetArticleEffects]),
		StoreModule.forFeature(articleFeature),
		RouterModule.forChild(routes)
  ],
	providers: [
		SharedArticleService
	],
})
export class ArticleModule { }
