import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FeedbackSliderComponent } from '../../addtions/feedback-slider/feedback-slider.component';

@Component({
  selector: 'app-user-contact-us',
  standalone: true,
  imports: [RouterLink ,FeedbackSliderComponent],
  templateUrl: './user-contact-us.component.html',
  styleUrl: './user-contact-us.component.css'
})
export class UserContactUsComponent {
  
}
