import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatorAdminDishComponent } from './validator-admin-dish.component';

describe('ValidatorAdminDishComponent', () => {
  let component: ValidatorAdminDishComponent;
  let fixture: ComponentFixture<ValidatorAdminDishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidatorAdminDishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatorAdminDishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
