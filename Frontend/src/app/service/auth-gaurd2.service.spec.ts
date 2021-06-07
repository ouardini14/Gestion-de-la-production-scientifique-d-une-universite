import { TestBed } from '@angular/core/testing';

import { AuthGaurdService2 } from './auth-gaurd2.service';

describe('AuthGaurdService2', () => {
  let service: AuthGaurdService2;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGaurdService2);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
