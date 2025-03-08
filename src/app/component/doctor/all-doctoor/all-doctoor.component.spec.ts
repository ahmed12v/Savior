import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDoctoorComponent } from './all-doctoor.component';

describe('AllDoctoorComponent', () => {
  let component: AllDoctoorComponent;
  let fixture: ComponentFixture<AllDoctoorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllDoctoorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllDoctoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
