import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteDishesComponent } from './favorite-dishes.component';

describe('FavoriteDishesComponent', () => {
  let component: FavoriteDishesComponent;
  let fixture: ComponentFixture<FavoriteDishesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteDishesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteDishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
