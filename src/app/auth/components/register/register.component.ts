import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'; 
import { Store, select } from '@ngrx/store';
import { authActions } from '../../store/regiter.action';
import { Observable } from 'rxjs';
import { isSubmittingSelector, validatonErrorSelector } from '../../store/auth.selectors';
import { AuthService } from '../../services/auth/auth.service';
import { IAuthRequest } from '../../types/authRequest.interface';
import { IBackendErrors } from '../../../shared/types/backendError.interface';

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
	backendError$: Observable<IBackendErrors | null>

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
		this.backendError$ = this.store.pipe(select(validatonErrorSelector))
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
