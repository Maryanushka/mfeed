import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagFeedComponent } from './tagFeed.component';

describe('GlobalFeedComponent', () => {
  let component: TagFeedComponent;
  let fixture: ComponentFixture<TagFeedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TagFeedComponent]
    });
    fixture = TestBed.createComponent(TagFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
