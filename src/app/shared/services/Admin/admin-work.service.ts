import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Docreq } from '../../Interfaces/Admin/admi';
import { baseApiUrl } from '../../../bases/base-url';

@Injectable({
  providedIn: 'root'
})
export class AdminWorkService {

  constructor(private _HttpClient:HttpClient) { }

  DocreqCome():Observable<Docreq>
  {
    let token = localStorage.getItem('token')
        let headers = new HttpHeaders()
        if(token){
         headers = headers.set('Authorization', 'Bearer ' + token)
        }

    return this._HttpClient.get<Docreq>(`${baseApiUrl.Url}/api/Admin/PendingDoctors`, {headers:headers})
  }
  
  AcceptDoc(reqid:any):Observable<any>
  {
    let token = localStorage.getItem('token')
    let headers = new HttpHeaders()
    if(token){
     headers = headers.set('Authorization', 'Bearer ' + token)
    }

    return this._HttpClient.post(`${baseApiUrl.Url}/api/Admin/ApproveDoctor/${reqid}`,null , 
      {headers:headers ,  responseType:'text'})
  }

  RejectDoc(reqid:any):Observable<any>
  {
    let token = localStorage.getItem('token')
    let headers = new HttpHeaders()
    if(token){
     headers = headers.set('Authorization', 'Bearer ' + token)
    }

    return this._HttpClient.post(`${baseApiUrl.Url}/api/Admin/RejectDoctor/${reqid}`,null,
      {headers:headers , responseType:'text'})
  }

  
}
