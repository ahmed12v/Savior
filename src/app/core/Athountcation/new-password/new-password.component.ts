import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ForgetPasswordService } from '../../../shared/services/athountocation/forget-password.service';

@Component({
  selector: 'app-new-password',
  standalone: true,
  imports: [RouterLink ,ReactiveFormsModule],
  templateUrl: './new-password.component.html',
  styleUrl: './new-password.component.css'
})
export class NewPasswordComponent {
  spinner:boolean=false

    NewForm:FormGroup = new FormGroup({
    newPassword:new FormControl(null , [Validators.required , Validators.pattern(/^[A-Z][a-z0-9]{8}$/)]),
    confirmNewPassword:new FormControl(null , [Validators.required]),
  },this.checkrePassword )

  checkrePassword(match:AbstractControl){
  
      if(match.get('newPassword')?.value === match.get('confirmNewPassword')?.value ){
           return null ;}
  
           else{
            match.get('confirmNewPassword')?.setErrors({missmatch:true});
            return {missmatch:true};
           }
    } 
    constructor(private _ForgetPasswordService:ForgetPasswordService, private _Router:Router ){ }

    SubmitNew(){
      this.spinner=true
      if(this.NewForm.valid){
        this._ForgetPasswordService.NewPass(this.NewForm.value).subscribe({
          next:res=>{
            this.spinner=false
            console.log(res)
            this._Router.navigate(['/login'])
          },
          error:err=>{
            this.spinner=false
            console.log(err)
          }
        })
      }

    }

}
