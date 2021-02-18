import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCampanyComponent } from './header-campany.component';

describe('HeaderCampanyComponent', () => {
  let component: HeaderCampanyComponent;
  let fixture: ComponentFixture<HeaderCampanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderCampanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCampanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
