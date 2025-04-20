import { Component, ViewChild } from '@angular/core';
import { CarouselComponent, CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-pharmacy-slider',
  standalone: true,
  imports: [ CarouselModule],
  templateUrl: './pharmacy-slider.component.html',
  styleUrl: './pharmacy-slider.component.css'
})
export class PharmacySliderComponent {

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
          items: 2
        },
        600: {
          items: 2
        },
        1000: {
          items: 4
        },
        
      },
      nav: true,
      autoplay: true,
      autoplayTimeout: 1000, 
      autoplayHoverPause: true 
    };
  
    goNext() {
      this.owlCarousel.next();
    }
  
    goPrev() {
      this.owlCarousel.prev();
    }
    

}
