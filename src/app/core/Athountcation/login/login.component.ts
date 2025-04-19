import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LogInService } from '../../../shared/services/athountocation/log-in.service';
import { GoogleSignService } from '../../../shared/core/google-sign.service';

declare const google: any;

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink , ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  spinner:boolean=false
  erroor:boolean=false

  loginForm: FormGroup =new FormGroup({
    email:new FormControl(null , [Validators.required , Validators.email]),
    password:new FormControl(null , [Validators.required , Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/)]),
  });


  constructor(private _loginServiec:LogInService,  private _Router:Router , private _GoogleSignService:GoogleSignService){}

  SubmitLogin()
  {
    
   
   
    if(this.loginForm.valid){
      this.spinner=true;
      this._loginServiec.Login(this.loginForm.value).subscribe({
        next:(res)=>{
          this.spinner=false
               console.log(res.token);
               localStorage.setItem('token',res.token)
               this._Router.navigate(['/home'])
               this._loginServiec.decodToken()
              
        },
        error:(err)=>{

          console.log(err)
          this.spinner=false
          this.erroor=true
        }
      })



    }
  }

  loging:boolean=false;
  ngOnInit(): void {
    setTimeout(() => {
      const googleBtn = document.getElementById('google-btn');
      if (googleBtn) {
        google.accounts.id.initialize({
          client_id: '106176847546-q6rjo51vbpq47t8hdbiakje4a3r8p8hj.apps.googleusercontent.com', 
                      
          callback: this.handleGoogleResponse.bind(this),
        });

        google.accounts.id.renderButton(googleBtn, {
          theme: 'outline',
          size: 'large',
          text: 'signin_with',
        });

        google.accounts.id.prompt();
      }
    }, 0);

    this._loginServiec.UserDataAfterDecoded.subscribe(
   
      (log)=>{ 
           if(this._loginServiec.UserDataAfterDecoded.getValue()!=null){
            this.loging=true
           }else{
            this.loging=false
           }
           
      })
  }

  handleGoogleResponse(response: any): void {
    const token = response.credential;
    const userPayload = this.decodeJwt(token);
  
    // ✅ بدلنا 'google_token' بـ 'token'
    localStorage.setItem('token', token);
    this.SubmitLogin()
    this._loginServiec.decodToken()
    // localStorage.setItem('user', JSON.stringify(userPayload));
  
    this._Router.navigate(['/home']);
    this.loging=true;
  }
  
  decodeJwt(token: string): any {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(c => `%${('00' + c.charCodeAt(0).toString(16)).slice(-2)}`)
        .join('')
    );
    return JSON.parse(jsonPayload);
  } 

  

 

}
