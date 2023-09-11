import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { getFeedActions } from '../../store/getFeed.action';
import { Observable, Subscription } from 'rxjs';
import { IGetFeedResponce } from '../../types/getFeedResponce.interface';
import { feedDataSelector, feedErrorSelector, feedIsLoadingSelector } from '../../store/getFeed.selectors';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { environment } from '../../../../../../environments/environment';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit, OnDestroy {
	@Input('apiUrl') apiUrlProps: string
	
	isLoading$: Observable<boolean>
	error$: Observable<string | null>
	feed$: Observable<IGetFeedResponce | null>
	errorSubscription: Subscription;
	limit = environment.limit
	currentPage: number
	baseUrl: string
	queryParamsSubscribtion: Subscription

	constructor(
		private store: Store,
		private _snackBar: MatSnackBar,
		private router: Router,
		private route: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.fetchData()
		this.initializeValues()
	}

	ngOnDestroy(): void {
    if (this.errorSubscription) {
      this.errorSubscription.unsubscribe();
    }
		this.queryParamsSubscribtion.unsubscribe()
  }

	initializeValues() {
		this.feed$ = this.store.pipe(select(feedDataSelector))
		this.error$ = this.store.pipe(select(feedErrorSelector))
		this.isLoading$ = this.store.pipe(select(feedIsLoadingSelector))
		this.baseUrl = this.router.url.split("?")[0]
	}

	initializeListeners() {
		this.queryParamsSubscribtion = this.route.queryParams.subscribe((params: Params) => {
			this.currentPage = Number(params['page'] || '1')
		})
	}

	fetchData() {
		this.store.dispatch(getFeedActions.getFeed({url: this.apiUrlProps}))
	}
	initErrorSubscription(): void {
    this.errorSubscription = this.error$.subscribe(error => {
      if (error) {
        this._snackBar.open(error, "close", {duration: 4000});
      }
    });
  }

  
}
