import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFeedComponent } from './components/userFeed/userFeed.component';
import { RouterModule } from '@angular/router';
import { FeedModule } from '../shared/modules/feed/feed.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { BannerModule } from '../shared/modules/banner/banner.module';
import { PopularTagsModule } from '../shared/modules/popularTags/popularTags.module';
import { FeedTogglerModule } from '../shared/modules/feedToggler/feedToggler.module';

const routes = [
	{
		path: 'feed',
		component: UserFeedComponent
	}
]

@NgModule({
  declarations: [
    UserFeedComponent
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
		UserFeedComponent
	]
})
export class UserFeedModule { }
