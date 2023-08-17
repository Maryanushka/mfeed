import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms'; 
import {ErrorStateMatcher} from '@angular/material/core';
import { Store } from '@ngrx/store';
import { registerAction } from '../store/actions/register.action';

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

  constructor(
		private fb: FormBuilder, 
		private store: Store
		) { }

  ngOnInit(): void {
		this.initializeForm()
  }

	initializeForm(): void {
		this.form = new FormGroup({
			name: new FormControl('', {validators: Validators.required}),
			email: new FormControl('',{ validators: [Validators.required, Validators.email]}),
			password: new FormControl('',{ validators: [Validators.required, Validators.minLength(4)], updateOn: 'change'}),
		})
		console.log(this.form.valid);
		
	}

	onSubmit(): void{
		console.log(this.form.valid, this.form.value);
		this.store.dispatch(registerAction(this.form.value))
	}
}
