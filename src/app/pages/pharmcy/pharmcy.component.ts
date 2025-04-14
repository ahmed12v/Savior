import { PharmacySliderComponent } from './../../addtions/pharmacy-slider/pharmacy-slider.component';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-pharmcy',
  standalone: true,
  imports: [RouterLink, PharmacySliderComponent],
  templateUrl: './pharmcy.component.html',
  styleUrl: './pharmcy.component.css'
})
export class PharmcyComponent   {

  
}


