import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LogInService } from '../../../shared/services/athountocation/log-in.service';


declare const google: any;

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink , ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  {

  spinner:boolean=false
  erroor:boolean=false

  loginForm: FormGroup =new FormGroup({
    email:new FormControl(null , [Validators.required , Validators.email]),
    password:new FormControl(null , [Validators.required , Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/)]),
  });


  constructor(private _loginServiec:LogInService,  private _Router:Router ,){}

  SubmitLogin()
  {
    
   
   
    if(this.loginForm.valid){
      this.spinner=true;
      this._loginServiec.Login(this.loginForm.value).subscribe({
        next:(res)=>{
          this.spinner=false
              //  console.log(res.token);
               localStorage.setItem('token',res.token)
               this._loginServiec.decodToken()
               this._Router.navigate(['/home'])
               
              
        },
        error:(err)=>{

          // console.log(err)
          this.spinner=false
          this.erroor=true
        }
      })



    }
  }

  loging:boolean=false;
  

 

}
