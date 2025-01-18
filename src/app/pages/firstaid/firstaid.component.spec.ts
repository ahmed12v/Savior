import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstaidComponent } from './firstaid.component';

describe('FirstaidComponent', () => {
  let component: FirstaidComponent;
  let fixture: ComponentFixture<FirstaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstaidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
