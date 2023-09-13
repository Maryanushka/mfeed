import { Component, Input, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isLoggedInSelector } from '../../../../../auth/store/auth.selectors';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-feed-toggler',
  templateUrl: './feedToggler.component.html',
  styleUrls: ['./feedToggler.component.scss']
})
export class FeedTogglerComponent implements OnInit {
	@Input ('tagName') tagNameProps: string | null;

	isLoggedIn$: Observable<boolean>
	activeLink = '';
	constructor(
		private store: Store,
		public router: Router, 
		public activatedRoute: ActivatedRoute
		){}

	ngOnInit(): void {
		this.initializeValues()
	}

	initializeValues() {
		this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector))
	}
}
