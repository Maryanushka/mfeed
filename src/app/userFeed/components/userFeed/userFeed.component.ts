import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-global-feed',
  templateUrl: './userFeed.component.html',
  styleUrls: ['./userFeed.component.scss']
})
export class UserFeedComponent implements OnInit {
	apiUrl = '/articles/feed'

	ngOnInit(): void {}
}
