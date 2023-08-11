import { TestBed } from '@angular/core/testing';

import { AuthGardeService } from './auth-garde.service';

describe('AuthGardeService', () => {
  let service: AuthGardeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGardeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
