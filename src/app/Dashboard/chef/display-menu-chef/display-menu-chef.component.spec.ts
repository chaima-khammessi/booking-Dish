import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMenuChefComponent } from './display-menu-chef.component';

describe('DisplayMenuChefComponent', () => {
  let component: DisplayMenuChefComponent;
  let fixture: ComponentFixture<DisplayMenuChefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayMenuChefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayMenuChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
