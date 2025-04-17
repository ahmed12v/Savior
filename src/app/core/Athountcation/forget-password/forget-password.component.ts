import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ForgetPasswordService } from '../../../shared/services/athountocation/forget-password.service';


@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [RouterLink , ReactiveFormsModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css'
})
export class ForgetPasswordComponent {
  spinner:boolean=false

  forgetForm: FormGroup=new FormGroup({
    email:new FormControl(null , [Validators.required , Validators.email])

  })
  constructor(private _ForgetPasswordService:ForgetPasswordService , private _Router:Router ){}

  SubmitForget(){
    this.spinner=true;
    if(this.forgetForm.valid)
      {
      this._ForgetPasswordService.Forget(this.forgetForm.value).subscribe({
        next:res=>{
          this._Router.navigate(['/VierfyCode'])
          // console.log(res)
          this.spinner=false
          
        },
        error:err=>{
          this.spinner=false
          console.log(err)
        }
      })
    }
  }
}
