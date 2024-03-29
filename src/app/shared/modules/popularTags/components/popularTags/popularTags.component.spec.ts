import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularTagsComponent } from './popularTags.component';

describe('PopularTagsComponent', () => {
  let component: PopularTagsComponent;
  let fixture: ComponentFixture<PopularTagsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopularTagsComponent]
    });
    fixture = TestBed.createComponent(PopularTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
