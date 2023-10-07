import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './components/settings/settings.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { settingsFeature } from './store/reducers';
import { ReactiveFormsModule } from '@angular/forms';
import { BackendErrorMessagesModule } from '../shared/modules/backendErrorMessages/backendErrorMessages.module';


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const routes = [
	{
		path: 'settings',
		component: SettingsComponent
	}
]

@NgModule({
  declarations: [
		SettingsComponent
	],
  imports: [
    CommonModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule,
		MatIconModule,
		BackendErrorMessagesModule,
		RouterModule.forChild(routes),
		StoreModule.forFeature(settingsFeature),
  ],
	exports: [
		SettingsComponent
	]
})
export class SettingsModule { }
