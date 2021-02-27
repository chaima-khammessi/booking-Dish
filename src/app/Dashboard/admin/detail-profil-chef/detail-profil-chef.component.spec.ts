import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProfilChefComponent } from './detail-profil-chef.component';

describe('DetailProfilChefComponent', () => {
  let component: DetailProfilChefComponent;
  let fixture: ComponentFixture<DetailProfilChefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailProfilChefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailProfilChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
