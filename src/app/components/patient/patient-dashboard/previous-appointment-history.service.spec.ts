import { TestBed } from '@angular/core/testing';

import { PreviousAppointmentHistoryService } from './previous-appointment-history.service';

describe('PreviousAppointmentHistoryService', () => {
  let service: PreviousAppointmentHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreviousAppointmentHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
