import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDashoardChefComponent } from './header-dashoard-chef.component';

describe('HeaderDashoardChefComponent', () => {
  let component: HeaderDashoardChefComponent;
  let fixture: ComponentFixture<HeaderDashoardChefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderDashoardChefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderDashoardChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
