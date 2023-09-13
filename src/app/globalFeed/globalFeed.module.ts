import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalFeedComponent } from './components/global-feed/globalFeed.component';
import { RouterModule } from '@angular/router';
import { FeedModule } from '../shared/modules/feed/feed.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { BannerModule } from '../shared/modules/banner/banner.module';
import { PopulrTagsModule } from '../shared/modules/popularTags/popularTags.module';

const routes = [
	{
		path: '',
		component: GlobalFeedComponent
	}
]

@NgModule({
  declarations: [
    GlobalFeedComponent
  ],
  imports: [
    CommonModule,
		FeedModule,
		MatGridListModule,
		PopulrTagsModule,
		BannerModule,
		RouterModule.forChild(routes)
  ],
	exports: [
		GlobalFeedComponent
	]
})
export class GlobalFeedModule { }
