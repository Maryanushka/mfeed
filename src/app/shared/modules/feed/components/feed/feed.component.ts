import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { getFeedActions } from '../../store/getFeed.action';
import { Observable, Subscription } from 'rxjs';
import { IGetFeedResponce } from '../../types/getFeedResponce.interface';
import { feedDataSelector, feedErrorSelector, feedIsLoadingSelector } from '../../store/getFeed.selectors';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';

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

	constructor(
		private store: Store,
		private _snackBar: MatSnackBar
	) {}

	ngOnInit(): void {
		this.fetchData()
		this.initializeValues()
	}

	initializeValues() {
		this.feed$ = this.store.pipe(select(feedDataSelector))
		this.error$ = this.store.pipe(select(feedErrorSelector))
		this.isLoading$ = this.store.pipe(select(feedIsLoadingSelector))
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

  ngOnDestroy(): void {
    if (this.errorSubscription) {
      this.errorSubscription.unsubscribe();
    }
  }
}
