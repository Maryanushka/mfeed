import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToFavouritesComponent } from './add-to-favorites.component';

describe('AddToFavouritesComponent', () => {
  let component: AddToFavouritesComponent;
  let fixture: ComponentFixture<AddToFavouritesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddToFavouritesComponent]
    });
    fixture = TestBed.createComponent(AddToFavouritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
