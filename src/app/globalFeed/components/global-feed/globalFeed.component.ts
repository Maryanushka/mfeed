import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-global-feed',
  templateUrl: './globalFeed.component.html',
  styleUrls: ['./globalFeed.component.scss']
})
export class GlobalFeedComponent implements OnInit {
	apiUrl = '/articles'

	ngOnInit(): void {}
}
