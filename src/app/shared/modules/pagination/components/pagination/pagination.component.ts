import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { UtilsService } from '../../../../services/utils.service';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { PaginatorIntl } from '../../../../services/paginatorIntl.service'
import { Subject } from 'rxjs';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  providers: [{provide: MatPaginatorIntl, useClass: PaginatorIntl}],
})
export class PaginationComponent implements OnInit {
	@Input('total') totalProps: number
	@Input('limit') limitProps: number
	@Input('currentPage') currentPageProps: number
	@Input('url') urlProps: string

	length = 0;
  pageSize = 10;
  pageIndex = 1;
  pageSizeOptions = [5, 10, 25];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = false;
  disabled = false;

  pageEvent: PageEvent;
	pagesCount: number;
	pages: number[];

	changes: Subject<void>;
	itemsPerPageLabel: string;
	nextPageLabel: string;
	previousPageLabel: string;
	firstPageLabel: string;
	lastPageLabel: string;

	constructor(
		private utilsService: UtilsService,
		private route: ActivatedRoute,
		private router: Router,
		){}
	
	ngOnInit(): void {
		this.pagesCount = Math.ceil(this.totalProps / this.limitProps)
		this.pages = this.utilsService.range(1, this.pagesCount);
		this.length = this.pagesCount
	}

  handlePageEvent(e: PageEvent) {
		console.log(e);
		// this.route.queryParams.subscribe((params: Params) => {
		// 	params['page'] = e.pageIndex
		// })
		this.router.navigate([],
			{
				relativeTo: this.route,
				queryParams: {page: e.pageIndex + 1},
				queryParamsHandling: 'merge'
			})
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.currentPageProps = e.pageIndex;
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }


}
