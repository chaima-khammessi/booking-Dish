import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayGalleryComponent } from './display-gallery.component';

describe('DisplayGalleryComponent', () => {
  let component: DisplayGalleryComponent;
  let fixture: ComponentFixture<DisplayGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
