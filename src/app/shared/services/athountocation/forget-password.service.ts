import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Codevierify, ForgetPassword, NewPassword } from '../../Interfaces/athountocation/forget-password';

@Injectable({
  providedIn: 'root'
})
export class ForgetPasswordService {

  constructor(private _HttpClient:HttpClient ) { }

  Forget(forgetForm:ForgetPassword):Observable<any>
  {
    return this._HttpClient.post('http://gpsavior.runasp.net/api/Authentication/forgot-password',forgetForm , { responseType: 'text' })
  }

  Codevierify(CodeForm:Codevierify):Observable<any>
  {
    return this._HttpClient.post('http://gpsavior.runasp.net/api/Authentication/Confirm-code',CodeForm , {responseType:'text'} )
  }

  NewPass(newForm:NewPassword):Observable<any>
  {
    return this._HttpClient.post('http://gpsavior.runasp.net/api/Authentication/reset-password',newForm,{responseType:'text'})
  }
  
}


