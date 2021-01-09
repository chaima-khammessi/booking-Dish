import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDishChefComponent } from './display-dish-chef.component';

describe('DisplayDishChefComponent', () => {
  let component: DisplayDishChefComponent;
  let fixture: ComponentFixture<DisplayDishChefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayDishChefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayDishChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
