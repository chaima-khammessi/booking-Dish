import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryChefComponent } from './gallery-chef.component';

describe('GalleryChefComponent', () => {
  let component: GalleryChefComponent;
  let fixture: ComponentFixture<GalleryChefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryChefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
