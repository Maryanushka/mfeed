import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedTogglerComponent } from './components/feed-toggler/feedToggler.component';
import {MatTabsModule} from '@angular/material/tabs';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    FeedTogglerComponent
  ],
  imports: [
    CommonModule,
		MatTabsModule,
		RouterModule
  ],
	exports: [
		FeedTogglerComponent
	]
})
export class FeedTogglerModule { }
