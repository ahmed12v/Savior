import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TopRatingSliderComponent } from '../../addtions/top-rating-slider/top-rating-slider.component';

@Component({
  selector: 'app-doctor',
  standalone: true,
  imports: [ RouterLink , TopRatingSliderComponent],
  templateUrl: './doctor.component.html',
  styleUrl: './doctor.component.css'
})
export class DoctorComponent {
  
  showAll: boolean = false; // متغير للتحكم في العرض
  

  // بيانات العناصر
  items: any[] = [
    { image: '../../../assets/imege/den-cato.jpg', title: 'Dentists', roter:'/dentists' },
    { image: '../../../assets/imege/عظام.jfif', title: 'Orthopedic doctors', roter:'/orthopedic' },
    { image: '../../../assets/imege/انف واذن وحنجره.jfif', title: 'Ear,nose,and throat', roter:'/throat' },
    { image: '../../../assets/imege/بصريات.jfif', title: 'Optometrists', roter:'/optometrists' },
    { image: '../../../assets/imege/قلب.jfif', title: 'Cardiologists', roter:'/cardiologists' },
    { image: '../../../assets/imege/اطفال.jfif', title: 'Pediatricians', roter:'/pediatricians' },
    { image: '../../../assets/imege/نساا.jfif', title: 'Gynecologists', roter:'/gynecologists' },
    { image: '../../../assets/imege/علاج طبيعي.jfif', title: 'Physical therapy ', roter:'/Physical' },
    { image: '../../../assets/imege/جلديه.jfif', title: 'Dermatologists', roter:'/dermatologists' },
    { image: '../../../assets/imege/بطنه.jpg', title: 'Gastroenterologists', roter:'/gastroenterologists' },
    { image: '../../../assets/imege/نفسي.jfif', title: 'Psychiatrists', roter:'/psychiatrists' },
  ];

  // دالة التبديل
  toggleViewMoreAndLess() {
    this.showAll = !this.showAll;
  }

}


