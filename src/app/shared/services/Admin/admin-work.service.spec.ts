import { TestBed } from '@angular/core/testing';

import { AdminWorkService } from './admin-work.service';

describe('AdminWorkService', () => {
  let service: AdminWorkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminWorkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
