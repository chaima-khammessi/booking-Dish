import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DishFavorisComponent } from './dish-favoris.component';

describe('DishFavorisComponent', () => {
  let component: DishFavorisComponent;
  let fixture: ComponentFixture<DishFavorisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DishFavorisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishFavorisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
