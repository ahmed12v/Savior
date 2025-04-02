import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptometristsComponent } from './optometrists.component';

describe('OptometristsComponent', () => {
  let component: OptometristsComponent;
  let fixture: ComponentFixture<OptometristsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptometristsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OptometristsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
