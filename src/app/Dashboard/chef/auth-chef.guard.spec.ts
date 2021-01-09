import { TestBed } from '@angular/core/testing';

import { AuthChefGuard } from './auth-chef.guard';

describe('AuthChefGuard', () => {
  let guard: AuthChefGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthChefGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
