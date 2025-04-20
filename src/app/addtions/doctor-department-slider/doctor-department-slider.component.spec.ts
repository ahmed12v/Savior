import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorDepartmentSliderComponent } from './doctor-department-slider.component';

describe('DoctorDepartmentSliderComponent', () => {
  let component: DoctorDepartmentSliderComponent;
  let fixture: ComponentFixture<DoctorDepartmentSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorDepartmentSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorDepartmentSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
