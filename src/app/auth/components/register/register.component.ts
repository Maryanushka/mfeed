import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms'; 
import {ErrorStateMatcher} from '@angular/material/core';
import { Store } from '@ngrx/store';
import { registerAction } from '../store/actions/register.action';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();
	form: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) { }

  ngOnInit(): void {
		this.initializeForm()
  }

	initializeForm(): void {
		this.form = this.fb.group({
			name: ['', Validators.required],
			email: ['', [Validators.required, Validators.email]],
			password: ['', [Validators.required, Validators.minLength(4)]],
		})
		console.log(this.form.valid);
		
	}

	onSubmit(): void{
		console.log(this.form.valid, this.form.value);
		this.store.dispatch(registerAction(this.form.value))
	}
}
