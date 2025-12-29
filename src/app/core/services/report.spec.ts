import { TestBed } from '@angular/core/testing';

import { ReportService } from './public/feature/services/report';

describe('Report', () => {
  let service: Report;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Report);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
