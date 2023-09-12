import { Component, Input } from '@angular/core';
import { PopularTagType } from '../../../../types/popularTagType';

@Component({
  selector: 'app-taglist',
  templateUrl: './taglist.component.html',
  styleUrls: ['./taglist.component.scss']
})
export class TaglistComponent {
	@Input('tags') tagsProps: PopularTagType[]
}
