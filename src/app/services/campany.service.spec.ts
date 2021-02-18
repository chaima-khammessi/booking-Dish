import { TestBed } from '@angular/core/testing';

import { CampanyService } from './campany.service';

describe('CampanyService', () => {
  let service: CampanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampanyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
