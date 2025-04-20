import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProfileService } from '../../../shared/services/Pages/profile.service';
import { Router } from '@angular/router';
import { UpdateUserPassword } from '../../../shared/Interfaces/Pages/profile';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-updatepass',
  standalone: true,
  imports: [ReactiveFormsModule ],
  templateUrl: './updatepass.component.html',
  styleUrl: './updatepass.component.css'
})
export class UpdatepassComponent {
  spinner:boolean=false
  erroeMsg!:UpdateUserPassword

  constructor(private _ProfileService:ProfileService  , private _Router:Router , private _toaster:ToastrService){}

  UpdatePaswwordForm:FormGroup=new FormGroup({

    oldPassword:new FormControl(null , [Validators.required , Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/)]),
    newPassword:new FormControl(null , [Validators.required , Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/)]),
    confirmNewPassword:new FormControl(null , [Validators.required]),
  }, this.checkrePassword)

  checkrePassword(match:AbstractControl){
  
      if(match.get('newPassword')?.value === match.get('confirmNewPassword')?.value ){
           return null ;}
  
           else{
            match.get('confirmNewPassword')?.setErrors({missmatch:true});
            return {missmatch:true};
           }
    } 


    UpdatePassword()
    {
      this.spinner=true
      if(this.UpdatePaswwordForm.valid){
        this._ProfileService.UpdateUserPasswor(this.UpdatePaswwordForm.value).subscribe({
          next: res=>{
            console.log(res)
            this._Router.navigate(['/profile'])
            this._toaster.success('Savior', 'Your Password Updated' , )
            this.spinner=false
          },
          error:err=>{
            console.log(err.error)
            this.spinner=false
            this.erroeMsg=err.error
            this._toaster.error('savior', 'incorrect Old Password')
              
          }
        })
      }
    }

}
