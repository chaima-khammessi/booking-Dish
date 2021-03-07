import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatorAdminMenuComponent } from './validator-admin-menu.component';

describe('ValidatorAdminMenuComponent', () => {
  let component: ValidatorAdminMenuComponent;
  let fixture: ComponentFixture<ValidatorAdminMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidatorAdminMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatorAdminMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
