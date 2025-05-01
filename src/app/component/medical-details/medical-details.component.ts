import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router'; // ← جديد

@Component({
  selector: 'app-medical-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './medical-details.component.html',
  styleUrl: './medical-details.component.css'
})
export class MedicalDetailsComponent {
  constructor(private router: Router) {}

  features = [
    {
      icon: '💉',
      title: 'Cannula at Home',
      description: 'We can come to your home and safely insert a cannula (a small tube in your hand for medicine). No need to go to the hospital.'
    },
    {
      icon: '🛏️',
      title: 'Home Checkups',
      description: 'We visit your home to check on you or anyone who needs medical care daily or weekly.'
    },
    {
      icon: '👨‍⚕️',
      title: 'Before and After Surgery Help',
      description: 'We help you get ready before surgery and take care of you at home after the surgery.'
    },
    {
      icon: '🏥',
      title: 'Home Care for Serious Conditions',
      description: 'If someone is very sick and cannot go to the hospital, we come and give full care at home.'
    }
  ];

  goToForm() {
    this.router.navigate(['/medical-form']);
  }
}
