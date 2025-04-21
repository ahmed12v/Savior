import { observable } from './../../../../../node_modules/@angular-devkit/build-webpack/node_modules/rxjs/src/internal/symbol/observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { contact, ContactUs} from '../../Interfaces/Pages/home';
import { baseApiUrl } from '../../../bases/base-url';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private _HttpClient:HttpClient) { }

  FeedBack(feedback:ContactUs):Observable<any>
  {
       let token = localStorage.getItem('token')
           let headers = new HttpHeaders()
           if(token){
            headers = headers.set('Authorization', 'Bearer ' + token)
           }

           return this._HttpClient.post(  `${baseApiUrl.Url}/api/connectus`,feedback,
            {
              headers : headers , responseType:'text'
            }
           )
           
  }

  getFeedback():Observable<contact>
  {
    return this._HttpClient.get<contact>(`${baseApiUrl.Url}/api/connectus`)
  }
}
