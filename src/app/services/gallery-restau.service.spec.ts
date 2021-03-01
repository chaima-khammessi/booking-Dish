import { TestBed } from '@angular/core/testing';

import { GalleryRestauService } from './gallery-restau.service';

describe('GalleryRestauService', () => {
  let service: GalleryRestauService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GalleryRestauService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
