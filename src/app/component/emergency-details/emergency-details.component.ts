import { Component } from '@angular/core';
import { EmergencyFormComponent } from '../forms/emergency-form/emergency-form.component';

@Component({
  selector: 'app-emergency-details',
  standalone: true,
  imports: [EmergencyFormComponent],
  templateUrl: './emergency-details.component.html',
  styleUrls: ['./emergency-details.component.css']
})
export class EmergencyDetailsComponent {
  selectedEmergency: string | null = null;

  openForm(type: string) {
    this.selectedEmergency = type;
  }

  closeForm() {
    this.selectedEmergency = null;
  }
}

