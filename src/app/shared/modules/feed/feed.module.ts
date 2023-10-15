import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './components/feed/feed.component';
import { RouterModule } from '@angular/router';

import { EffectsModule } from '@ngrx/effects';
import { GetFeedEffects } from './store/getFeed.effects';
import { StoreModule } from '@ngrx/store';
import { feedFeature } from './store/getFeed.reducer';
import { FeedService } from './services/feed.service';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { PaginationModule } from '../pagination/pagination.module';
import { TagListModule } from '../tagList/taglist.module';
import { AddToFavoritesModule } from '../add-to-favourites/addToFavourites.module';

@NgModule({
  declarations: [
    FeedComponent
  ],
  imports: [
    CommonModule,
		MatProgressBarModule,
		MatSnackBarModule,
		MatButtonModule,
		MatCardModule,
		TagListModule,
		MatIconModule,
		PaginationModule,
		AddToFavoritesModule,
		RouterModule,
		EffectsModule.forFeature([GetFeedEffects]),
		StoreModule.forFeature(feedFeature)
  ],
	providers: [
		FeedService,
	],
	exports: [
		FeedComponent
	]
})
export class FeedModule { }
