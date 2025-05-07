import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineDetialsComponent } from './medicine-detials.component';

describe('MedicineDetialsComponent', () => {
  let component: MedicineDetialsComponent;
  let fixture: ComponentFixture<MedicineDetialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicineDetialsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicineDetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
