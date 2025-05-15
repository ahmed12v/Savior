import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminfeedsComponent } from './adminfeeds.component';

describe('AdminfeedsComponent', () => {
  let component: AdminfeedsComponent;
  let fixture: ComponentFixture<AdminfeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminfeedsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminfeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
