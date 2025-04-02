import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DentistsComponent } from './dentists.component';

describe('DentistsComponent', () => {
  let component: DentistsComponent;
  let fixture: ComponentFixture<DentistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DentistsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DentistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
