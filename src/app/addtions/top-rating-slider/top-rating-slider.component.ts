import { Component, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule , OwlOptions , CarouselComponent} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-top-rating-slider',
  standalone: true,
  imports: [CarouselModule,RouterLink],
  templateUrl: './top-rating-slider.component.html',
  styleUrl: './top-rating-slider.component.css'
})
export class TopRatingSliderComponent {
@ViewChild('owlCarousel', { static: false }) owlCarousel!: CarouselComponent;
    
    customOptions: OwlOptions = {
  loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: false,
      dots: false,
      navSpeed: 800,
      navText: ['', ''],
      responsive: {
        0: {
          items: 1
        },
        
        
      },
      nav: true
    };
    goNext(){
      this.owlCarousel.next();
    }
    goPrev(){
      this.owlCarousel.prev();
    }

}
