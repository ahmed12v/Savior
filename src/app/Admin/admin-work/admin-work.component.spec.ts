import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWorkComponent } from './admin-work.component';

describe('AdminWorkComponent', () => {
  let component: AdminWorkComponent;
  let fixture: ComponentFixture<AdminWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminWorkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
