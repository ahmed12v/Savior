import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from 'express';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from '../../shared/services/Pages/home.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-give-feed-back',
  standalone: true,
  imports: [ReactiveFormsModule , RouterLink],
  templateUrl: './give-feed-back.component.html',
  styleUrl: './give-feed-back.component.css'
})
export class GiveFeedBackComponent {

  spinner:boolean=false
  
    constructor(private _HomeService:HomeService  , private _ToastrService:ToastrService){}
  
  
  FeedbackForm:FormGroup = new FormGroup({
    name:new FormControl('', [Validators.required , Validators.minLength(3),Validators.maxLength(12)]),
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
