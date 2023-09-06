import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRippleModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    TopBarComponent
  ],
  imports: [
    CommonModule,
		MatToolbarModule,
		MatIconModule,
		MatButtonModule,
		MatGridListModule,
		MatRippleModule,
		RouterModule
  ],
	exports: [
		TopBarComponent
	]
})
export class TopBarModule { }
