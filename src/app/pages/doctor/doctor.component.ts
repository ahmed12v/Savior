import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-doctor',
  standalone: true,
  imports: [RouterLinkActive , RouterLink],
  templateUrl: './doctor.component.html',
  styleUrl: './doctor.component.css'
})
export class DoctorComponent {
  
  showAll: boolean = false; // متغير للتحكم في العرض
  

  // بيانات العناصر
  items: any[] = [
    { image: '../../../assets/imege/اسنان.jfif', title: 'Dentists', roter:'/Dental' },
    { image: '../../../assets/imege/عظام.jfif', title: 'Orthopedic doctors', roter:'/Dental' },
    { image: '../../../assets/imege/انف واذن وحنجره.jfif', title: 'Ear,nose,and throat', roter:'/Dental' },
    { image: '../../../assets/imege/بصريات.jfif', title: 'Optometrists', roter:'/Dental' },
    { image: '../../../assets/imege/قلب.jfif', title: 'Cardiologists', roter:'/Dental' },
    { image: '../../../assets/imege/اطفال.jfif', title: 'Pediatricians', roter:'/Dental' },
    { image: '../../../assets/imege/نساا.jfif', title: 'Gynecologists.', roter:'/Dental' },
    { image: '../../../assets/imege/علاج طبيعي.jfif', title: 'Physical therapy ', roter:'/Dental' },
    { image: '../../../assets/imege/جلديه.jfif', title: 'Dermatologists', roter:'/Dental' },
    { image: '../../../assets/imege/بطنه.jpg', title: 'Gastroenterologists', roter:'/Dental' },
    { image: '../../../assets/imege/نفسي.jfif', title: 'Psychiatrists', roter:'/Dental' },
  ];

  // دالة التبديل
  toggleViewMoreAndLess() {
    this.showAll = !this.showAll;
  }

}


