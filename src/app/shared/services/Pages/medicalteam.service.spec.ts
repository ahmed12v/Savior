import { TestBed } from '@angular/core/testing';

import { MedicalteamService } from './medicalteam.service';

describe('MedicalteamService', () => {
  let service: MedicalteamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicalteamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
