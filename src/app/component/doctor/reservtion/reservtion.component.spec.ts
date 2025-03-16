import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservtionComponent } from './reservtion.component';

describe('ReservtionComponent', () => {
  let component: ReservtionComponent;
  let fixture: ComponentFixture<ReservtionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservtionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
