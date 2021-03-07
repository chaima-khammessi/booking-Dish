import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryRestauComponent } from './gallery-restau.component';

describe('GalleryRestauComponent', () => {
  let component: GalleryRestauComponent;
  let fixture: ComponentFixture<GalleryRestauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryRestauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryRestauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
