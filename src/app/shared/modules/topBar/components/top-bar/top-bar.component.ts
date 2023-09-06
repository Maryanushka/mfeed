import { Component, OnInit, inject } from '@angular/core';
import { currentUserSelector, isAnonymousSelector, isLoggedInSelector } from '../../../../../auth/store/auth.selectors';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICurrentUser } from '../../../../types/currentUser.interface';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
	// store = inject(Store)

	isLoggedIn$: Observable<boolean>
	isAnonymous$: Observable<boolean>
	currentUser$: Observable<ICurrentUser | null>
	
	constructor(private store: Store) {}
	
	ngOnInit(): void {
		
		this.isAnonymous$ = this.store.pipe(select(isAnonymousSelector))
		this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector))
		this.currentUser$ = this.store.pipe(select(currentUserSelector))
	}
}
