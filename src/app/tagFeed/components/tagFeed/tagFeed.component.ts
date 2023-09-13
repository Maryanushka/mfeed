import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tag-feed',
  templateUrl: './tagFeed.component.html',
  styleUrls: ['./tagFeed.component.scss']
})
export class TagFeedComponent implements OnInit {
	apiUrl = '/articles/tags'

	ngOnInit(): void {}
}
