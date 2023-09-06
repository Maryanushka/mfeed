import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'; 
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isSubmittingSelector, validatonErrorSelector } from '../../store/auth.selectors';
import { AuthService } from '../../services/auth/auth.service';
import { IBackendErrors } from '../../types/backendError.interface';
import { loginActions } from '../../store/login.action';
import { ILoginRequest } from '../../types/loginRequest.interface';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
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
			email: new FormControl('',{ validators: [Validators.required, Validators.email]}),
			password: new FormControl('',{ validators: [Validators.required, Validators.minLength(4)], updateOn: 'change'}),
		})
		console.log(this.form.valid);
		
	}

	onSubmit(): void{
		console.log(this.form.valid, this.form.value);
		const request: ILoginRequest = { user: this.form.value }
		this.store.dispatch(loginActions.authLogin({request}))

	}

}
