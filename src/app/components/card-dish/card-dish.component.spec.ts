import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDishComponent } from './card-dish.component';

describe('CardDishComponent', () => {
  let component: CardDishComponent;
  let fixture: ComponentFixture<CardDishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardDishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
