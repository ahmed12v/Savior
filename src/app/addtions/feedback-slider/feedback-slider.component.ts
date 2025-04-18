
import { Component, OnInit, ViewChild } from '@angular/core';
import { CarouselComponent, OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';
import { contact, feedback} from '../../shared/Interfaces/Pages/home';
import { HomeService } from '../../shared/services/Pages/home.service';

@Component({
  selector: 'app-feedback-slider',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './feedback-slider.component.html',
  styleUrl: './feedback-slider.component.css'
})
export class FeedbackSliderComponent implements OnInit {
  ngOnInit(): void {
    this.getContact();
  }

  @ViewChild('owlCarousel', { static: false }) owlCarousel!: CarouselComponent;
    
    customOptions: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: false,
      dots: false,
      navSpeed: 800,
      navText: ['', ''],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 4
        },
        
      },
      nav: true
    };
  
    spinner:boolean=false
    FeedbackData!:contact;
  
    constructor(private _HomeService:HomeService , ){}
  
    getContact()
    {
        this.spinner=true
         this._HomeService.getFeedback().subscribe({
            next:res=>{
              console.log(res)
              this.spinner=false
              this.FeedbackData=res
            },
            error:err=>{
              console.log(err)
              this.spinner=false
            }
         })
    }
  
    

}
