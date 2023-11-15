import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './components/user-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileService } from './services/user-profile.service';
import { EffectsModule } from '@ngrx/effects';
import { GetUserProfileEffects } from './store/getUserProfile.effects';
import { StoreModule } from '@ngrx/store';
import { userProfileFeature } from './store/getUserProfile.reducer';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FeedModule } from '../shared/modules/feed/feed.module';
import { MatTabsModule } from '@angular/material/tabs';

const routes: Routes = [
	{
		path: 'profiles/:slug',
		component: UserProfileComponent
	},
	{
		path: 'profiles/:slug/favorites',
		component: UserProfileComponent
	},
];

@NgModule({
  declarations: [UserProfileComponent],
  imports: [
    CommonModule,
		MatProgressBarModule,
		MatSnackBarModule,
		MatIconModule,
		MatButtonModule,
		FeedModule,
		MatTabsModule,
		RouterModule.forChild(routes),
		EffectsModule.forFeature([GetUserProfileEffects]),
		StoreModule.forFeature(userProfileFeature),
  ],
	exports: [UserProfileComponent],
	providers: [
		UserProfileService
	]
})
export class UserProfileModule { }
