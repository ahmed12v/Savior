import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor, DoctorRegester } from '../../Interfaces/Pages/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private _HttpClient:HttpClient) { }

  DoctorRegester(RegesterForm:DoctorRegester):Observable<any>
  {
      return this._HttpClient.post('http://gpsavior.runasp.net/api/doctor/register' , RegesterForm , {responseType:'text'})
  }

  getAllDoctor():Observable<Doctor>
  {
    return this._HttpClient.get<Doctor>('http://gpsavior.runasp.net/api/doctor/doctors')
  }

  

  

}



