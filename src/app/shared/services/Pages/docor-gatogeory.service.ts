import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gatogoery } from '../../Interfaces/Pages/doctor-gatogery';

@Injectable({
  providedIn: 'root'
})
export class DocorGatogeoryService {

  constructor( private _HttpClient:HttpClient) { }

  Dentist():Observable<Gatogoery>
  {
    return this._HttpClient.get<Gatogoery>('http://gpsavior.runasp.net/api/doctor/doctors/by-specialty?specialty=Dentist')
  }

  Orthopaedic():Observable<Gatogoery>
  {
    return this._HttpClient.get<Gatogoery>('http://gpsavior.runasp.net/api/doctor/doctors/by-specialty?specialty=Orthopaedic')
  }

  EarAndNose():Observable<Gatogoery>
  {
    return this._HttpClient.get<Gatogoery>('http://gpsavior.runasp.net/api/doctor/doctors/by-specialty?specialty=Ear%2C%20Nose%2C%20and%20Throat')
  }

  Optometrists():Observable<Gatogoery>
  {
    return this._HttpClient.get<Gatogoery>('http://gpsavior.runasp.net/api/doctor/doctors/by-specialty?specialty=Optometrists')
  }

  Cardiologist():Observable<Gatogoery>
  {
    return this._HttpClient.get<Gatogoery>('http://gpsavior.runasp.net/api/doctor/doctors/by-specialty?specialty=Cardiologist')
  }

  Pediatricians():Observable<Gatogoery>
  {
    return this._HttpClient.get<Gatogoery>('http://gpsavior.runasp.net/api/doctor/doctors/by-specialty?specialty=Pediatricians')
  }

  Gynecologist():Observable<Gatogoery>
  {
    return this._HttpClient.get<Gatogoery>('http://gpsavior.runasp.net/api/doctor/doctors/by-specialty?specialty=Gynecologist')
  }

  PhysicalTherapy():Observable<Gatogoery>
  {
    return this._HttpClient.get<Gatogoery>('http://gpsavior.runasp.net/api/doctor/doctors/by-specialty?specialty=Physical%20Therapy')
  }

  Dermatologists():Observable<Gatogoery>
  {
    return this._HttpClient.get<Gatogoery>('http://gpsavior.runasp.net/api/doctor/doctors/by-specialty?specialty=Dermatologists')
  }

  Gastroenteritis():Observable<Gatogoery>
  {
    return this._HttpClient.get<Gatogoery>('http://gpsavior.runasp.net/api/doctor/doctors/by-specialty?specialty=Gastroenteritis')
  }

  Psychiatrists():Observable<Gatogoery>
  {
    return this._HttpClient.get<Gatogoery>('http://gpsavior.runasp.net/api/doctor/doctors/by-specialty?specialty=Psychiatrists')
  }

}
