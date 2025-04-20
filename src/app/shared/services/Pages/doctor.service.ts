import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../../Interfaces/Pages/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private _HttpClient:HttpClient) { }

  getAllDoctor():Observable<Doctor>
  {
    return this._HttpClient.get<Doctor>('http://gpsavior.runasp.net/api/doctor/doctors')
  }
}
