import { Component, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselComponent, CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-doctor-department-slider',
  standalone: true,
  imports: [CarouselModule , RouterLink],
  templateUrl: './doctor-department-slider.component.html',
  styleUrl: './doctor-department-slider.component.css'
})
export class DoctorDepartmentSliderComponent {


  

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
        1000: {
          items: 3
        },
        
      },
      nav: true,
        autoplay: true,
        autoplayTimeout: 2000, 
        autoplayHoverPause: true 
    };

    items: any[] = [
      { image: '../../../assets/imege/den-cato.jpg', title: 'Dentists', roter:'/dentists' },
      { image: '../../../assets/imege/عظام.jfif', title: 'Orthopedic doctors', roter:'/orthopedic' },
      { image: '../../../assets/imege/انف واذن وحنجره.jfif', title: 'Ear,nose,and throat', roter:'/throat'},
      { image: '../../../assets/imege/بصريات.jfif', title: 'Optometrists', roter:'/optometrists' },
      { image: '../../../assets/imege/قلب.jfif', title: 'Cardiologists', roter:'/cardiologists' },
      { image: '../../../assets/imege/اطفال.jfif', title: 'Pediatricians', roter:'/pediatricians' },
      { image: '../../../assets/imege/نساا.jfif', title: 'Gynecologists', roter:'/gynecologists' },
      { image: '../../../assets/imege/علاج طبيعي.jfif', title: 'Physical therapy ', roter:'/Physical' },
      { image: '../../../assets/imege/جلديه.jfif', title: 'Dermatologists', roter:'/dermatologists' },
      { image: '../../../assets/imege/بطنه.jpg', title: 'Gastroenterologists', roter:'/gastroenterologists' },
      { image: '../../../assets/imege/نفسي.jfif', title: 'Psychiatrists', roter:'/psychiatrists' },
    ];

}
