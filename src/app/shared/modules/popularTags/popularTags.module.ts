import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetPopularTagsService } from './services/getPopularTags.service';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { popularTagsFeature } from './store/retPopularTags.reducer';
import { GetPopularTagsEffects } from './store/getPopularTags.effects copy';

import { PopularTagsComponent } from './components/popularTags/popularTags.component';

import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    PopularTagsComponent
  ],
  imports: [
    CommonModule,
		MatChipsModule,
		MatProgressBarModule,
		RouterModule,
		EffectsModule.forFeature([GetPopularTagsEffects]),
		StoreModule.forFeature(popularTagsFeature)
  ],
	providers: [
		GetPopularTagsService
	],
	exports: [
		PopularTagsComponent
	]
})
export class PopulrTagsModule { }
