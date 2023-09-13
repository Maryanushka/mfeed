import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedTogglerComponent } from './feedToggler.component';

describe('FeedTogglerComponent', () => {
  let component: FeedTogglerComponent;
  let fixture: ComponentFixture<FeedTogglerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedTogglerComponent]
    });
    fixture = TestBed.createComponent(FeedTogglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
