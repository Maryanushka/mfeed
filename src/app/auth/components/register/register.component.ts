import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms'; 
import {ErrorStateMatcher} from '@angular/material/core';
import { Store, select } from '@ngrx/store';
import { authActions } from '../store/auth.action';
import { Observable } from 'rxjs';
import { isSubmittingSelector } from '../store/auth.selectors';
import { AuthService } from '../../services/auth/auth.service';
import { IAuthRequest } from '../../types/authRequest.interface';
import { IAuthResponce } from '../../types/authResponce.interface';
import { ActionTypes } from '../store/actionTypes';

/** Error when invalid control is dirty, touched, or submitted. */
// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }
// }

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
	form: FormGroup;
	isSubmitting$: Observable<boolean>

  constructor(
		private fb: FormBuilder, 
		private store: Store,
		private authService: AuthService
		) { }

  ngOnInit(): void {
		this.initializeForm()
		this.initializeValues()
  }
	initializeValues():void {
		this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
	}

	initializeForm(): void {
		this.form = new FormGroup({
			username: new FormControl('', {validators: Validators.required}),
			email: new FormControl('',{ validators: [Validators.required, Validators.email]}),
			password: new FormControl('',{ validators: [Validators.required, Validators.minLength(4)], updateOn: 'change'}),
		})
		console.log(this.form.valid);
		
	}

	onSubmit(): void{
		console.log(this.form.valid, this.form.value);
		const request: IAuthRequest = { user: this.form.value }
		this.store.dispatch(authActions.authRegister({request}))

	}
}
