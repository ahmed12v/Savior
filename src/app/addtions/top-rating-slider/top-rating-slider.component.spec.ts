import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRatingSliderComponent } from './top-rating-slider.component';

describe('TopRatingSliderComponent', () => {
  let component: TopRatingSliderComponent;
  let fixture: ComponentFixture<TopRatingSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopRatingSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopRatingSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
