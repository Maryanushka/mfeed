import { Component, OnDestroy, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { getPopularTagsActions } from '../../store/getPopularTags.action';
import { PopularTagType } from '../../../../types/popularTagType';
import { errorTagsSelector, getPopularTagsSelector, isLoadingSelector } from '../../store/getPopularTags.selectors';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-popular-tags',
  templateUrl: './popularTags.component.html',
  styleUrls: ['./popularTags.component.scss']
})
export class PopularTagsComponent implements OnInit, OnDestroy {

	popularTags$: Observable<PopularTagType[] | null>
	isLoading$: Observable<boolean>
	error$: Observable<string | null>
	errorSubscription: Subscription;

	constructor(
		private store: Store,
		private _snackBar: MatSnackBar,
		) {}

	ngOnInit(): void {
		this.initializeValues()
		this.fetchData()
	}

	ngOnDestroy(): void {
    if (this.errorSubscription) {
      this.errorSubscription.unsubscribe();
    }
  }

	initializeValues() {
		this.popularTags$ = this.store.pipe(select(getPopularTagsSelector))
		this.isLoading$ = this.store.pipe(select(isLoadingSelector))
		this.error$ = this.store.pipe(select(errorTagsSelector))
	}

	fetchData() {
		this.store.dispatch(getPopularTagsActions.getTags())
	}

	initErrorSubscription(): void {
    this.errorSubscription = this.error$.subscribe(error => {
      if (error) {
        this._snackBar.open(error, "close", {duration: 4000});
      }
    });
  }

	selectedValue(e) {
		console.log(e);
		
	}
}
