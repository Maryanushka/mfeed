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
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    FeedComponent
  ],
  imports: [
    CommonModule,
		MatProgressBarModule,
		MatSnackBarModule,
		MatGridListModule,
		MatButtonModule,
		MatCardModule,
		MatChipsModule,
		MatIconModule,
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
