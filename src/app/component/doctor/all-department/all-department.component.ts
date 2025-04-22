import { Component } from '@angular/core';
import { TopRatingSliderComponent } from '../../../addtions/top-rating-slider/top-rating-slider.component';
import { DoctorDepartmentSliderComponent } from '../../../addtions/doctor-department-slider/doctor-department-slider.component';

@Component({
  selector: 'app-all-department',
  standalone: true,
  imports: [DoctorDepartmentSliderComponent ,TopRatingSliderComponent],
  templateUrl: './all-department.component.html',
  styleUrl: './all-department.component.css'
})
export class AllDepartmentComponent {

}
