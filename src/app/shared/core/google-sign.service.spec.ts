import { TestBed } from '@angular/core/testing';

import { GoogleSignService } from './google-sign.service';

describe('GoogleSignService', () => {
  let service: GoogleSignService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleSignService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
