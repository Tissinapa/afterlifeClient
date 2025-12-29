import { TestBed } from '@angular/core/testing';

import { SeatService } from './public/feature/services/seat';

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
