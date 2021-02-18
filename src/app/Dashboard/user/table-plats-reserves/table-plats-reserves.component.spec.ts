import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePlatsReservesComponent } from './table-plats-reserves.component';

describe('TablePlatsReservesComponent', () => {
  let component: TablePlatsReservesComponent;
  let fixture: ComponentFixture<TablePlatsReservesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablePlatsReservesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePlatsReservesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
