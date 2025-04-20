import { HomeSliderComponent } from './../../addtions/home-slider/home-slider.component';
import {  Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HomeService } from '../../shared/services/Pages/home.service';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';





@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, HomeSliderComponent , ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {
  


  details:any[]= [
     {tittle:'Pharmacy & Medicine' , detals:'You can search for the nearest pharmacy, search for the treatment you want and then it will be delivered to you through us. ',
      route:'/pharmcy' , icon:' fa-solid fa-capsules fs-2 icon-des '
      },
      {tittle:'Search By Ai' , detals:'You can search for a treatment through your private prescription and you can also request it, And deliver it to you through Us ',
        route:'/searchMedicine' , icon:'fa-solid fa-sheet-plastic fs-2 icon-des '
        },
     {tittle:'Find Doctor & Booked ' , detals:'You can search for a doctor by his name or through his section, and know his appointments and you can also book an appointment with him. ',
      route:'/doctor' , icon:' fa-solid fa-user-doctor fs-2 icon-des '
      },
     {tittle:'Emergency Team' , detals:'Emergencies are divided into two parts, and this part includes fires and highway accidents. You can request an emergency team in these cases. ',
      route:'/medicalTeam' , icon:' fa-solid fa-truck-medical fs-2 icon-des '
      },
     {tittle:'Medical Team' , detals:'This section is a medical team that you can request in late-night emergencies to provide first aid or request it inside the home. ',
      route:'/medicalTeam' , icon:' fa-solid fa-user-nurse fs-2 icon-des '
      },
     {tittle:'First Aid' , detals:'is a page that can help you in the event of something unexpected happening and it can be an educational page that you can benefit ',
      route:'/firstaid' , icon:' fa-solid fa-briefcase-medical fs-2 icon-des '
      },
     
  ]

  scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  spinner:boolean=false

  constructor(private _HomeService:HomeService , private _Router:Router , private _ToastrService:ToastrService){}


FeedbackForm:FormGroup = new FormGroup({
  name:new FormControl('', [Validators.required , Validators.minLength(3),Validators.maxLength(12)]),
  email:new FormControl('' , [Validators.required , Validators.email]),
  feedback:new FormControl('', Validators.required)
})

SendFeedBack()
{
    this.spinner=true
    if(this.FeedbackForm.valid){
      this._HomeService.FeedBack(this.FeedbackForm.value).subscribe({
        next:res=>{
          console.log(res)
          this.spinner=false
          this._ToastrService.success( 'Savior','Thanks For Your Feedback' ,)
          this.FeedbackForm.reset()
        },
        error:err=>{
          this.spinner=false
          this._ToastrService.error('Savior','please inter feedback by correct way',)
          this.FeedbackForm.reset()

        }
      })

    }
    
}
 


}

