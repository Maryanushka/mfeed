import { TestBed } from '@angular/core/testing';

import { GetPopularTagsService } from './getPopularTags.service';

describe('PopularTagsService', () => {
  let service: GetPopularTagsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPopularTagsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
