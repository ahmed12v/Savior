import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../../Interfaces/Pages/profile';
import { StorageService } from '../storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor( private _HttpClient:HttpClient , private _StorageService:StorageService) { }
getMe():Observable<Profile>
{
  let token = localStorage.getItem('token')
    let headers = new HttpHeaders()
    if(token){
     headers = headers.set('Authorization', 'Bearer ' + token)
    }

    return this._HttpClient.get<Profile>('/api/profile',{headers : headers})
};
  
}
