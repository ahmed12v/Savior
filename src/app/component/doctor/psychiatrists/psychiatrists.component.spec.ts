import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychiatristsComponent } from './psychiatrists.component';

describe('PsychiatristsComponent', () => {
  let component: PsychiatristsComponent;
  let fixture: ComponentFixture<PsychiatristsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsychiatristsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PsychiatristsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
