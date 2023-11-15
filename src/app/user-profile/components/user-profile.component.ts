import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProfile } from '../../shared/types/profile.interface';
import { Observable, Subscription, combineLatest, filter, map } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { getUserProfile } from '../store/getUserProfile.action';
import { userProfileDataSelector, userProfileErrorSelector, userProfileIsLoadingSelector } from '../store/getUserProfile.selectors';
import { ICurrentUser } from '../../shared/types/currentUser.interface';
import { currentUserSelector } from '../../auth/store/auth.selectors';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit, OnDestroy {
	userProfile: IProfile
	isLoading$: Observable<boolean>
	error$: Observable<string | null>
	userProfileSubscription: Subscription
	slug: string
	apiUrl: string
	isCurrentUserProfile$: Observable<boolean>

	private store: Store = inject(Store)
	private route = inject(ActivatedRoute)
	router = inject(Router)

	ngOnInit(): void {
		this.initializeValues()
		this.initializeListeners()
	}

	ngOnDestroy(): void {
		this.userProfileSubscription.unsubscribe()
	}

	fetchData(): void {
		this.store.dispatch(getUserProfile.getUserProfile({slug: this.slug}))
	}
	initializeValues(): void {
		this.slug = this.route.snapshot.paramMap.get('slug')
		this.isLoading$ = this.store.pipe(select(userProfileIsLoadingSelector))
		this.error$ = this.store.pipe(select(userProfileErrorSelector))
		this.isCurrentUserProfile$ = combineLatest([
			this.store.pipe(select(userProfileDataSelector)),
			this.store.pipe(select(currentUserSelector))
		]).pipe(
			map(
				(([userProfile, currentUser]: [IProfile | null, ICurrentUser | null]) => 
					{
						if(!userProfile || !currentUser) return false
						console.log(userProfile, currentUser, userProfile.username === currentUser.username);
						return userProfile.username === currentUser.username
					}
				)
			)
		)
	}
	initializeListeners(): void {
		this.userProfileSubscription = this.store.pipe(select(userProfileDataSelector)).subscribe((userProfile: IProfile | null) => {
			this.userProfile = userProfile
		})
		this.route.params.subscribe((params) => {	
			this.slug = params['slug']
			this.getApiUrl()
			this.fetchData()
		})
	}

	getApiUrl(): string {
		const isFaforites = this.router.url.includes('favorites')
		return (this.apiUrl = isFaforites ? `/articles?favorited=${this.slug}` : `/articles?author=${this.slug}`)
	}
}
