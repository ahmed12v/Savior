import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { SignInService } from '../../../shared/services/athountocation/sign-in.service';

declare const google: any;

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent implements OnInit {

 


  
  spinner: boolean = false;

  SignUpForm: FormGroup = new FormGroup({
    firstName: new FormControl(null, [Validators.required, Validators.maxLength(12), Validators.minLength(3)]),
    lastName: new FormControl(null, [Validators.required, Validators.maxLength(12), Validators.minLength(3)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/)
    ]),
    confirmPassword: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)])
  }, this.checkrePassword);

  constructor(private _SignInService: SignInService, private _Router: Router) {}

 

  checkrePassword(match: AbstractControl) {
    if (match.get('password')?.value === match.get('confirmPassword')?.value) {
      return null;
    } else {
      match.get('confirmPassword')?.setErrors({ missmatch: true });
      return { missmatch: true };
    }
  }

  SubmitSignUp() {
    if (this.SignUpForm.valid) {
      this.spinner = true;
      this._SignInService.SignUp(this.SignUpForm.value).subscribe({
        next: (res) => {
          console.log(res);
          this._Router.navigate(['/login']);
          this.spinner = false;
        },
        error: (err) => {
          console.log(err);
          this.spinner = false;
        }
      });
    }
  }

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
  }

  //  Google Login 
  handleGoogleResponse(response: any): void {
    const token = response.credential;
    const userPayload = this.decodeJwt(token);

    
    localStorage.setItem('google_token', token);
    localStorage.setItem('user', JSON.stringify(userPayload));

    
    this._Router.navigate(['/home']);
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
