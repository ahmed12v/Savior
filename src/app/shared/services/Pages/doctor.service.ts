import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor, DoctorDetials, DoctorRegester } from '../../Interfaces/Pages/doctor';
import { baseApiUrl } from '../../../bases/base-url';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private _HttpClient:HttpClient) { }

  DoctorRegester(RegesterForm:DoctorRegester):Observable<any>
  {
      return this._HttpClient.post('/api/doctor/register' , RegesterForm , {responseType:'text'})
  }

  getAllDoctor():Observable<Doctor>
  {
    return this._HttpClient.get<Doctor>(`${baseApiUrl.Url}/api/doctor/doctors`)
  }

  DoctorDetiales(DoctorId:Number):Observable< DoctorDetials >
  {
   
    return this._HttpClient.get<DoctorDetials>(`${baseApiUrl.Url}/api/doctor/${DoctorId}`)
  }

  

  

}



