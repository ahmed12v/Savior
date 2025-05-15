import { TestBed } from '@angular/core/testing';

import { EmegencyService } from './emegency.service';

describe('EmegencyService', () => {
  let service: EmegencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmegencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
