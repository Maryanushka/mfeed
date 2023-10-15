import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddToFavoritesComponent } from './add-to-favourites/add-to-favorites.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AddToFavoritesComponent
  ],
  imports: [
    CommonModule,
		MatButtonModule,
		MatIconModule
  ],
	exports: [
    AddToFavoritesComponent
  ],
})
export class AddToFavoritesModule { }
