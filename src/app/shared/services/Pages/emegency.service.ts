import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { emergency } from '../../Interfaces/Pages/emergency';
import { Observable } from 'rxjs';
import { base2, baseApiUrl } from '../../../bases/base-url';

@Injectable({
  providedIn: 'root'
})
export class EmegencyService {

  constructor(private _HttpClient:HttpClient) { }

  RequestEmergencyTeam(REquestForm:emergency):Observable<any>
  {
    return this._HttpClient.post(`${base2.Ur2}/api/Emergency/request`,REquestForm)
  }
}
