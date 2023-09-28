import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './components/settings/settings.component';
import { RouterModule } from '@angular/router';

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
		RouterModule.forChild(routes)
  ],
	exports: [
		SettingsComponent
	]
})
export class SettingsModule { }
