import { Component, Input, OnInit } from '@angular/core';

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

	ngOnInit(): void {
			this.favoritesCount = this.favoritesCountProps
			this.isFavorited = this.isFavoritedProps
	}
	handleLike(): void {
		if(this.isFavorited) {
			this.favoritesCount = this.favoritesCount - 1
		} else {
			this.favoritesCount = this.favoritesCount + 1
		}

		this.isFavorited = !this.isFavorited
	}
}
