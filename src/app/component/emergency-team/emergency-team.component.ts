import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmergencyFormComponent } from "../forms/emergency-form/emergency-form.component";

@Component({
  selector: 'app-emergency-team',
  standalone: true,
  imports: [RouterModule, EmergencyFormComponent],
  templateUrl: './emergency-team.component.html',
  styleUrls: ['./emergency-team.component.css']
})
export class EmergencyTeamComponent implements OnInit {

  minutes: number = 10;
  seconds: number = 0;

  showForm: boolean = false;
  selectedType: string = '';

  ngOnInit(): void {
    this.startCountdown();
  }

  startCountdown() {
    setInterval(() => {
      if (this.seconds === 0) {
        if (this.minutes === 0) {
        } else {
          this.minutes--;
          this.seconds = 59;
        }
      } else {
        this.seconds--;
      }

      const timerElement = document.getElementById('timer');
      if (timerElement) {
        timerElement.innerText = `${this.minutes}:${this.seconds < 10 ? '0' + this.seconds : this.seconds}`;
      }
    }, 1000);
  }

  openForm(type: string) {
    this.selectedType = type;
    this.showForm = true;
  }

  closeForm() {
    this.showForm = false;
  }
}