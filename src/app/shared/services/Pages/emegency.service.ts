import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { emergency, MedicalReCome, Members, reqUserCome, SendMember } from '../../Interfaces/Pages/emergency';
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

  UserRequested(userid:any):Observable<reqUserCome>
  {
    return this._HttpClient.get<reqUserCome>(`${base2.Ur2}/api/Emergency/user/${userid}`)
  }
  
  AllEmergency():Observable<reqUserCome>
  {
    return this._HttpClient.get<reqUserCome>(`${base2.Ur2}/api/Emergency/all`)
  }

  RequestMedicalMember(data:SendMember):Observable<any>
  {
    return this._HttpClient.post(`${base2.Ur2}/api/MedicalStaffMember/request`,data)
  }

  AllMembers():Observable<Members>
  {
    return this._HttpClient.get<Members>(`${base2.Ur2}/api/MedicalStaffMember/all`)
  }

  UserMedicalMeberRequest(userId:any):Observable<MedicalReCome>
  {
    return this._HttpClient.get<MedicalReCome>(`${base2.Ur2}/api/MedicalStaffMember/user/${userId}/requests`)
  }

  AllMedical():Observable<MedicalReCome>
  {
    return this._HttpClient.get<MedicalReCome>(`${base2.Ur2}/api/MedicalStaffMember/requests/all`)
  }
}
