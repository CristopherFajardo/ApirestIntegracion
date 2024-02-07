import { TestBed } from '@angular/core/testing';

import { AppiTServiceService } from './appi-tservice.service';

describe('AppiTServiceService', () => {
  let service: AppiTServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppiTServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
