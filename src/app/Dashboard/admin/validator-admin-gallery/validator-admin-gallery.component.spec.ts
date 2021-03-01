import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatorAdminGalleryComponent } from './validator-admin-gallery.component';

describe('ValidatorAdminGalleryComponent', () => {
  let component: ValidatorAdminGalleryComponent;
  let fixture: ComponentFixture<ValidatorAdminGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidatorAdminGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatorAdminGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
