import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryDishsCompanyComponent } from './history-dishs-company.component';

describe('HistoryDishsCompanyComponent', () => {
  let component: HistoryDishsCompanyComponent;
  let fixture: ComponentFixture<HistoryDishsCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryDishsCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryDishsCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
