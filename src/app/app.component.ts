import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCurrentUserActions } from 'src/app/auth/store/getCurrentUser.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	constructor(private store: Store) {}

	ngOnInit(): void {
		this.store.dispatch(getCurrentUserActions.authGetCurrentUser())
	}
}
