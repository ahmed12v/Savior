import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyTeamComponent } from './emergency-team.component';

describe('EmergencyTeamComponent', () => {
  let component: EmergencyTeamComponent;
  let fixture: ComponentFixture<EmergencyTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmergencyTeamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmergencyTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
