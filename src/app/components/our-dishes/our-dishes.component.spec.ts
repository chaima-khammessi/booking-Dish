import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurDishesComponent } from './our-dishes.component';

describe('OurDishesComponent', () => {
  let component: OurDishesComponent;
  let fixture: ComponentFixture<OurDishesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurDishesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurDishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
