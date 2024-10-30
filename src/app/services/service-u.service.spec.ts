import { TestBed } from '@angular/core/testing';

import { ServiceUService } from './service-u.service';

describe('ServiceUService', () => {
  let service: ServiceUService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceUService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
