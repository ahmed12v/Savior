import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { base2 } from '../../../bases/base-url';

@Injectable({
  providedIn: 'root'
})
export class AichatService {

  constructor(private _HttpClient: HttpClient) { }

  Chat(message: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'text/json'
    });
  
    const body = `"${message}"`; // ده يدي "hello"
  
    return this._HttpClient.post(`${base2.Ur2}/api/Chat/ask`, body, { headers ,   responseType: 'text' as 'json' });
  }
}
