import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './components/user-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileService } from './services/user-profile.service';
import { EffectsModule } from '@ngrx/effects';
import { GetUserProfileEffects } from './store/getUserProfile.effects';
import { StoreModule } from '@ngrx/store';
import { userProfileFeature } from './store/getUserProfile.reducer';

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
