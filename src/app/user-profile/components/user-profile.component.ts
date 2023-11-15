import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProfile } from '../../shared/types/profile.interface';
import { Observable, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute, Route } from '@angular/router';
import { getUserProfile } from '../store/getUserProfile.action';
import { userProfileErrorSelector, userProfileIsLoadingSelector } from '../store/getUserProfile.selectors';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
	userProfile: IProfile
	isLoading$: Observable<boolean>
	error$: Observable<string | null>
	userProfileSubscription: Subscription
	slug: string

	private store: Store = inject(Store)
	private route = inject(ActivatedRoute)

	ngOnInit(): void {
		this.initializeValues()
		this.fetchData()
	}
	fetchData(): void {
		this.store.dispatch(getUserProfile.getUserProfile({slug: this.slug}))
	}
	initializeValues(): void {
		this.slug = this.route.snapshot.paramMap.get('slug')
		this.isLoading$ = this.store.pipe(select(userProfileIsLoadingSelector))
		this.error$ = this.store.pipe(select(userProfileErrorSelector))
	}
}
