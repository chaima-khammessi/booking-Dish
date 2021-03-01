import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDisplayGalleryComponent } from './table-display-gallery.component';

describe('TableDisplayGalleryComponent', () => {
  let component: TableDisplayGalleryComponent;
  let fixture: ComponentFixture<TableDisplayGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableDisplayGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDisplayGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
