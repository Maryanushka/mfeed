import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleFormComponent } from './components/article-form/article-form.component';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BackendErrorMessagesModule } from '../backendErrorMessages/backendErrorMessages.module';

@NgModule({
  declarations: [
		ArticleFormComponent
	],
  imports: [
    CommonModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule,
		BackendErrorMessagesModule
  ],
	exports: [
		ArticleFormComponent
	]
})
export class ArticleFormModule { }
