import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tag-feed',
  templateUrl: './tagFeed.component.html',
  styleUrls: ['./tagFeed.component.scss']
})
export class TagFeedComponent implements OnInit {
	apiUrl: string
	tagName: string

	constructor(private route: ActivatedRoute) {}

	ngOnInit(): void {
		
		this.route.params.subscribe((params: Params) => {
			console.log(params);
			
			this.tagName = params['slug']
			this.apiUrl = `/articles?tag=${this.tagName}`
			
		})
	}
}
