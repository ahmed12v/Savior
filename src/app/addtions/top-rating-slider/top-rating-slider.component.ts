import { Component, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule , OwlOptions , CarouselComponent} from 'ngx-owl-carousel-o';
import { Gatogoery } from '../../shared/Interfaces/Pages/doctor-gatogery';
import { DocorGatogeoryService } from '../../shared/services/Pages/docor-gatogeory.service';
import { BookFormComponent } from '../../component/doctor/book-form/book-form.component';

@Component({
  selector: 'app-top-rating-slider',
  standalone: true,
  imports: [CarouselModule,RouterLink , BookFormComponent],
  templateUrl: './top-rating-slider.component.html',
  styleUrl: './top-rating-slider.component.css'
})
export class TopRatingSliderComponent {
  //#region Slider
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
        
        
      },
      nav: true
    };
    goNext(){
      this.owlCarousel.next();
    }
    goPrev(){
      this.owlCarousel.prev();
    }

//#endregion


//#region 

 //#region 
  selectedDoctorID: string | null = null;

  openBookingPopup(doctorID: any
  ) {
  this.selectedDoctorID = doctorID;
  }

  closePopup() {
   this.selectedDoctorID = null;
  }
  //#endregion
  
 ngOnInit(): void {
   this.DentistDOctor()
 }
 
 spinner:boolean=false
 doctorsData!:Gatogoery
 userWord:string=''

 constructor(private _DocorGatogeoryService:DocorGatogeoryService){}

 DentistDOctor()
 {
  this.spinner=true
  this._DocorGatogeoryService.TopRating().subscribe({
    next:res=>{
         console.log(res)
         this.spinner=false
        this.doctorsData=res
    },
    error:err=>{
      console.log(err);
      this.spinner=false
      
    }
    
  })
 }


//#endregion
}
