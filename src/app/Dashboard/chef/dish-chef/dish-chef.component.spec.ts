import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DishChefComponent } from './dish-chef.component';

describe('DishChefComponent', () => {
  let component: DishChefComponent;
  let fixture: ComponentFixture<DishChefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DishChefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
