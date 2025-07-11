import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookNowDoctor, catoo, Doctor, DoctorDetials, DoctorRegester, getBooking, ResponsSendBook } from '../../Interfaces/Pages/doctor';
import { baseApiUrl } from '../../../bases/base-url';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private _HttpClient:HttpClient) { }

  AllCatoo():Observable<catoo>
  {
  return this._HttpClient.get<catoo>(`${baseApiUrl.Url}/api/doctor/specialties`)
  }

  DoctorRegester(RegesterForm:DoctorRegester):Observable<any>
  {
      return this._HttpClient.post(`${baseApiUrl.Url}/api/doctor/register`, RegesterForm , {responseType:'text'})
  }

  getAllDoctor():Observable<Doctor>
  {
    return this._HttpClient.get<Doctor>(`${baseApiUrl.Url}/api/doctor/doctors`)
  }

  DoctorDetiales(DoctorId:Number):Observable< DoctorDetials >
  {
   
    return this._HttpClient.get<DoctorDetials>(`${baseApiUrl.Url}/api/doctor/${DoctorId}`)
  }

  ///////////////
BookNow(BookForm:BookNowDoctor):Observable<any>
{
  let token = localStorage.getItem('token')
    let headers = new HttpHeaders()
    if(token){
     headers = headers.set('Authorization', 'Bearer ' + token)
    }
  return this._HttpClient.post<any>(`${baseApiUrl.Url}/api/doctor/book`,BookForm ,
     {headers:headers })
}
/////////////////
getBooking():Observable<getBooking>
{
    let token = localStorage.getItem('token')
    let headers = new HttpHeaders()
    if(token){
     headers = headers.set('Authorization', 'Bearer ' + token)
    }
  return this._HttpClient.get<getBooking>(`${baseApiUrl.Url}/api/doctor/mybookings`,{headers:headers })
}

///////////////
CancelBook(bookid:any):Observable<any>
{
  let token = localStorage.getItem('token')
  let headers = new HttpHeaders()
  if(token){
   headers = headers.set('Authorization', 'Bearer ' + token)
  }
 return this._HttpClient.delete(`${baseApiUrl.Url}/api/doctor/cancel-booking/${bookid}` ,{headers :headers})
}
  

}



