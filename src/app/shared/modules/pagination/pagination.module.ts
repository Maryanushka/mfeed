import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './components/pagination/pagination.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { UtilsService } from '../../services/utils.service';
;


@NgModule({
  declarations: [
		PaginationComponent,
	],
  imports: [
    CommonModule,
		MatPaginatorModule
  ],
	exports: [
		PaginationComponent
	],
	providers: [
		UtilsService,
	]
})
export class PaginationModule { }
