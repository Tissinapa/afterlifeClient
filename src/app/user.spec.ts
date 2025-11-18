import { TestBed } from '@angular/core/testing';

import { UserService } from '../app/services/user';

describe('User', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
