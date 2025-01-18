import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSaviorComponent } from './about-savior.component';

describe('AboutSaviorComponent', () => {
  let component: AboutSaviorComponent;
  let fixture: ComponentFixture<AboutSaviorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutSaviorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutSaviorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
