import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ForgetPasswordService } from '../../../shared/services/athountocation/forget-password.service';

@Component({
  selector: 'app-verify-code',
  standalone: true,
  imports: [RouterLink ,ReactiveFormsModule],
  templateUrl: './verify-code.component.html',
  styleUrl: './verify-code.component.css'
})
export class VerifyCodeComponent {
  spinner:boolean=false

CodeForm:FormGroup=new FormGroup({
  code:new FormControl(null ,Validators.required)
})

constructor(private _ForgetPasswordService:ForgetPasswordService ,private _Router:Router ){}

CodeSubmit(){
  this.spinner=true
  if(this.CodeForm.valid){
      this._ForgetPasswordService.Codevierify(this.CodeForm.value).subscribe({
        next:res=>{
          this.spinner=false

           this._Router.navigate(['/newPass'])
        },
        error:err=>{
          this.spinner=false

          console.log(err)
        }
      })
  }
}

}
