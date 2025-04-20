import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';
import { Login } from '../../Interfaces/athountocation/login';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  UserDataAfterDecoded:BehaviorSubject<any>=new BehaviorSubject(null);

  constructor( private _HttpClient:HttpClient , @Inject(PLATFORM_ID) private id:object,) { 
    if (isPlatformBrowser(id)){
      if(localStorage.getItem('token')){
        this.decodToken()
      }
    };

  }


  Login(loginForm:Login):Observable<any>
  {
   return this._HttpClient.post('http://gpsavior.runasp.net/api/Authentication/login',loginForm)
  }


  decodToken(){
      
    const token = JSON.stringify(localStorage.getItem('token'));
    const decoded = jwtDecode(token);
    this.UserDataAfterDecoded.next(decoded); 
}
  




refreshUserDataFromToken() {
  const token = localStorage.getItem('token');
  if (token) {
    try {
      const decoded = jwtDecode(token);
      this.UserDataAfterDecoded.next(decoded);
    } catch (err) {
      console.error('Token decode failed', err);
      this.UserDataAfterDecoded.next(null);
    }
  }
}

}

