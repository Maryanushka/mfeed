import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFeedComponent } from './userFeed.component';

describe('GlobalFeedComponent', () => {
  let component: UserFeedComponent;
  let fixture: ComponentFixture<UserFeedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserFeedComponent]
    });
    fixture = TestBed.createComponent(UserFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
