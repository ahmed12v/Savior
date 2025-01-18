import { TestBed } from '@angular/core/testing';

import { PharmcyService } from './pharmcy.service';

describe('PharmcyService', () => {
  let service: PharmcyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PharmcyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
