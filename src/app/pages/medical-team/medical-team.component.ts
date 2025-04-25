import { Component } from '@angular/core';
import { EmergencyDetailsComponent} from "../../component/emergency-details/emergency-details.component";
import { RouterLink } from '@angular/router';
import { MedicalDetailsComponent } from '../../component/medical-details/medical-details.component';

@Component({
  selector: 'app-medical-team',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './medical-team.component.html',
  styleUrl: './medical-team.component.css'
})
export class MedicalTeamComponent {

}