import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalFeedComponent } from './globalFeed.component';

describe('GlobalFeedComponent', () => {
  let component: GlobalFeedComponent;
  let fixture: ComponentFixture<GlobalFeedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GlobalFeedComponent]
    });
    fixture = TestBed.createComponent(GlobalFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
