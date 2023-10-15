import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addToFavoritesActions } from '../store/addToFavourites.action';

@Component({
  selector: 'app-add-to-favorites',
  templateUrl: './add-to-favorites.component.html',
  styleUrls: ['./add-to-favorites.component.scss']
})
export class AddToFavoritesComponent implements OnInit {
	@Input('favoritesCount') favoritesCountProps: number 
	@Input('isFavorited') isFavoritedProps: boolean	
	@Input('articleSlug') articleSlugProps: string

	favoritesCount: number = 5
	isFavorited: boolean
	favoriteColor: string 

	constructor(private store: Store) {}
	ngOnInit(): void {
		this.favoritesCount = this.favoritesCountProps
		this.isFavorited = this.isFavoritedProps
		this.favoriteColor = this.isFavoritedProps ? 'accent' : 'primary'
	}
	handleLike(): void {
		console.log("favorites");
		
		this.store.dispatch(addToFavoritesActions.addToFavorites({
			isFavorited: this.isFavorited, 
			slug: this.articleSlugProps
		}))
		if(this.isFavorited) {
			this.favoritesCount = this.favoritesCount - 1
			this.favoriteColor = 'primary'
		} else {
			this.favoritesCount = this.favoritesCount + 1
			this.favoriteColor = 'accent'
		}

		this.isFavorited = !this.isFavorited
	}
}
