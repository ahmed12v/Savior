
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignIn } from '../../Interfaces/athountocation/sign-in';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor(private _HttpClient:HttpClient) { }

  SignUp(signform:SignIn):Observable<any>
  {
     return this._HttpClient.post('/api/Authentication/signup',signform)
  }
}
