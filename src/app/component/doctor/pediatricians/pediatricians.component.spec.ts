import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PediatriciansComponent } from './pediatricians.component';

describe('PediatriciansComponent', () => {
  let component: PediatriciansComponent;
  let fixture: ComponentFixture<PediatriciansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PediatriciansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PediatriciansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
