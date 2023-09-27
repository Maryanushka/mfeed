import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { EditArticleService } from 'src/app/editArticle/services/editArticle.service';
import { ArticleService as  SharedArticleService } from 'src/app/shared/services/article.service';
import { ArticleFormModule } from 'src/app/shared/modules/articleForm/articleForm.module';
import { UpdateArticleEffects } from 'src/app/editArticle/store/update-article.effects';
import { GetArticleEffects } from 'src/app/editArticle/store/get-article.effects';
import { updateAticleFeature } from 'src/app/editArticle/store/update-article.reducer';
import { EditArticleComponent } from './components/edit-article/edit-article.component';

import { MatProgressBarModule } from '@angular/material/progress-bar';

const routes = [
	{
		path: 'articles/:slug/edit',
		component: EditArticleComponent
	}
]

@NgModule({
  declarations: [
		EditArticleComponent
	],
  imports: [
    CommonModule,
		ArticleFormModule,
		MatProgressBarModule,
		RouterModule.forChild(routes),
		StoreModule.forFeature(updateAticleFeature),
		EffectsModule.forFeature([UpdateArticleEffects, GetArticleEffects])
  ],
	providers: [
		EditArticleService,
		SharedArticleService,
	]
})
export class EditArticleModule { }
