import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatGridListModule } from '@angular/material/grid-list';

import { TagFeedComponent } from './components/tagFeed/tagFeed.component';
import { FeedModule } from '../shared/modules/feed/feed.module';
import { BannerModule } from '../shared/modules/banner/banner.module';
import { PopularTagsModule } from '../shared/modules/popularTags/popularTags.module';
import { FeedTogglerModule } from '../shared/modules/feedToggler/feedToggler.module';

const routes = [
	{
		path: 'tags/:slug',
		component: TagFeedComponent
	}
]

@NgModule({
  declarations: [
    TagFeedComponent
  ],
  imports: [
    CommonModule,
		FeedModule,
		MatGridListModule,
		PopularTagsModule,
		FeedTogglerModule,
		BannerModule,
		RouterModule.forChild(routes)
  ],
	exports: [
		TagFeedComponent
	]
})
export class TagFeedModule { }
