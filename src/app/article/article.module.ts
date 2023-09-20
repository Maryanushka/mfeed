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
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TagListModule } from '../shared/modules/tagList/taglist.module';

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
		MatIconModule,
		MatButtonModule,
		TagListModule,
		EffectsModule.forFeature([GetArticleEffects]),
		StoreModule.forFeature(articleFeature),
		RouterModule.forChild(routes)
  ],
	providers: [
		SharedArticleService
	],
})
export class ArticleModule { }
