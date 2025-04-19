import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { SignInService } from '../../../shared/services/athountocation/sign-in.service';



@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent  {

 


  
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

 
}
