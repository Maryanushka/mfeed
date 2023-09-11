import { TestBed } from '@angular/core/testing';

import { PaginatorIntl } from './paginatorIntl.service';

describe('PaginatorIntlService', () => {
  let service: PaginatorIntl;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaginatorIntl);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
