import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteDishesCompanyComponent } from './favorite-dishes-company.component';

describe('FavoriteDishesCompanyComponent', () => {
  let component: FavoriteDishesCompanyComponent;
  let fixture: ComponentFixture<FavoriteDishesCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteDishesCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteDishesCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
