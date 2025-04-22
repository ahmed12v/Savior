import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AllDoctoorComponent } from '../../component/doctor/all-doctoor/all-doctoor.component';

@Component({
  selector: 'app-doctor',
  standalone: true,
  imports: [ RouterLink ,  AllDoctoorComponent],
  templateUrl: './doctor.component.html',
  styleUrl: './doctor.component.css'
})
export class DoctorComponent {
  
  
  

  

}


