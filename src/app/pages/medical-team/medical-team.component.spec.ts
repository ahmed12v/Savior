import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalTeamComponent } from './medical-team.component';

describe('MedicalTeamComponent', () => {
  let component: MedicalTeamComponent;
  let fixture: ComponentFixture<MedicalTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalTeamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicalTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
