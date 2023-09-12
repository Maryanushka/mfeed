import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaglistComponent } from './components/taglist/taglist.component';
import { MatChipsModule } from '@angular/material/chips';


@NgModule({
  declarations: [
    TaglistComponent
  ],
  imports: [
    CommonModule,
		MatChipsModule,
  ],
	exports: [
		TaglistComponent
	]
})
export class TagListModule { }
