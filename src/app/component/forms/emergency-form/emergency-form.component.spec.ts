import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyFormComponent } from './emergency-form.component';

describe('EmergencyFormComponent', () => {
  let component: EmergencyFormComponent;
  let fixture: ComponentFixture<EmergencyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmergencyFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmergencyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
