import { TestBed } from '@angular/core/testing';

import { SeatService } from '../app/services/seat';

describe('Seat', () => {
  let service: SeatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
