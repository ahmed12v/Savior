import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NearstLocationFormComponent } from './nearst-location-form.component';

describe('NearstLocationFormComponent', () => {
  let component: NearstLocationFormComponent;
  let fixture: ComponentFixture<NearstLocationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NearstLocationFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NearstLocationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
