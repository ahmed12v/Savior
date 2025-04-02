import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThroatComponent } from './throat.component';

describe('ThroatComponent', () => {
  let component: ThroatComponent;
  let fixture: ComponentFixture<ThroatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThroatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThroatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
