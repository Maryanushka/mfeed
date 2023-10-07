import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { ICurrentUser } from '../../../shared/types/currentUser.interface';
import { Observable, Subscription, filter } from 'rxjs';
import { currentUserSelector } from '../../../auth/store/auth.selectors';
import { IBackendErrors } from '../../../shared/types/backendError.interface';
import { isSubmittingSelector, validatonErrorSelector } from '../../store/selectors';
import { updateCurrentUserActions } from '../../../auth/store/updateCurrentUser.action';
import { logoutAction } from '../../../auth/store/sync.action';
import { ICurrentUserInput } from '../../../shared/types/currentUserInput.interface';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, OnDestroy {

	form: FormGroup
	isSubmitting$: Observable<boolean>
	backendErrors$: Observable<IBackendErrors | null>
	currentUser: ICurrentUser
	currentUserSubscribtion: Subscription

	constructor(private fb: FormBuilder, private store: Store) {}

	ngOnInit(): void {
		this.initializeListeners()
		this.initializeValues()
	}

	ngOnDestroy(): void {
		this.currentUserSubscribtion.unsubscribe()
	}

	initializeValues(): void {
		this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
		this.backendErrors$ = this.store.pipe(select(validatonErrorSelector))
	}

	initializeListeners(): void {
		this.currentUserSubscribtion = this.store.pipe(
			select(currentUserSelector), 
			filter(Boolean))
			.subscribe((currentUser: ICurrentUser) => {
			this.currentUser = currentUser
			this.initializeForms()
		})
	}

	initializeForms(): void {
		this.form = this.fb.group({
			image: this.currentUser.image,
			username: this.currentUser.username,
			bio: this.currentUser.bio,
			email: this.currentUser.email,
			password: '',
		})
	}

	onSubmit(e: any): void {
		console.log(this.form.value);
		const currentUserInput: ICurrentUserInput = {
			user: {
				...this.currentUser,
				...this.form.value
			}
		}
		this.store.dispatch(updateCurrentUserActions.authUpdateCurrentUser({currentUserInput: currentUserInput}))
	}
	logout() {
		this.store.dispatch(logoutAction())
	}
}
