import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddToFavoritesComponent } from './add-to-favourites/add-to-favorites.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AddToFavoritesService } from './services/add-to-favorites.service';
import { EffectsModule } from '@ngrx/effects';
import { AddToFavoritesEffects } from './store/addToFavourites.effects';

@NgModule({
  declarations: [
    AddToFavoritesComponent
  ],
  imports: [
    CommonModule,
		MatButtonModule,
		MatIconModule,
		EffectsModule.forFeature([AddToFavoritesEffects])
  ],
	providers: [
		AddToFavoritesService
	],
	exports: [
    AddToFavoritesComponent
  ],
})
export class AddToFavoritesModule { }
