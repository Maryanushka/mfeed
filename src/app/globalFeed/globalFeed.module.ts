import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalFeedComponent } from './components/global-feed/globalFeed.component';
import { RouterModule } from '@angular/router';
import { FeedModule } from '../shared/modules/feed/feed.module';

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
		RouterModule.forChild(routes)
  ],
	exports: [
		GlobalFeedComponent
	]
})
export class GlobalFeedModule { }
