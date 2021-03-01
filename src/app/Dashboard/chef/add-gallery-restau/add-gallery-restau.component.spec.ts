import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGalleryRestauComponent } from './add-gallery-restau.component';

describe('AddGalleryRestauComponent', () => {
  let component: AddGalleryRestauComponent;
  let fixture: ComponentFixture<AddGalleryRestauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGalleryRestauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGalleryRestauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
