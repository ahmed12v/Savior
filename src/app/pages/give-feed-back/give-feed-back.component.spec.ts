import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveFeedBackComponent } from './give-feed-back.component';

describe('GiveFeedBackComponent', () => {
  let component: GiveFeedBackComponent;
  let fixture: ComponentFixture<GiveFeedBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GiveFeedBackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GiveFeedBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
