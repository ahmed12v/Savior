import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacySliderComponent } from './pharmacy-slider.component';

describe('PharmacySliderComponent', () => {
  let component: PharmacySliderComponent;
  let fixture: ComponentFixture<PharmacySliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PharmacySliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PharmacySliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
