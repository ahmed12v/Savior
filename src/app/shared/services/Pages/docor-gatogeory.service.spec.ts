import { TestBed } from '@angular/core/testing';

import { DocorGatogeoryService } from './docor-gatogeory.service';

describe('DocorGatogeoryService', () => {
  let service: DocorGatogeoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocorGatogeoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
