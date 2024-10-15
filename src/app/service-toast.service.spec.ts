import { TestBed } from '@angular/core/testing';

import { ServiceToastService } from './service-toast.service';

describe('ServiceToastService', () => {
  let service: ServiceToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceToastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
