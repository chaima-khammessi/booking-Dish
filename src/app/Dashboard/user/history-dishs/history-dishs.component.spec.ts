import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryDishsComponent } from './history-dishs.component';

describe('HistoryDishsComponent', () => {
  let component: HistoryDishsComponent;
  let fixture: ComponentFixture<HistoryDishsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryDishsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryDishsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
