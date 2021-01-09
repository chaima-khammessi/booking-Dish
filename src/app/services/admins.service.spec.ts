import { TestBed } from '@angular/core/testing';

import { AdminService } from './admins.service';

describe('AdminsService', () => {
  let service: AdminsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
