import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticlesComponentComponent } from './particles-component.component';

describe('ParticlesComponentComponent', () => {
  let component: ParticlesComponentComponent;
  let fixture: ComponentFixture<ParticlesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParticlesComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParticlesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
