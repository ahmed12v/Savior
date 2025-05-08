import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddToCart, Cart, CheckOut, getNear, Phahrmacy } from '../../Interfaces/Pages/phahrmacy';
import { base2} from '../../../bases/base-url';

@Injectable({
  providedIn: 'root'
})
export class PharmcyService {

  constructor(private _HttpClient:HttpClient) { }

  getAllMedicine():Observable<Phahrmacy>
  {
       return this._HttpClient.get<Phahrmacy>(`${base2.Ur2}/api/Medicines`)
  }
  
  getMedicinebyid(id:any):Observable<Phahrmacy>
  {
       return this._HttpClient.get<Phahrmacy>(`${base2.Ur2}/api/Medicines/${id}`)
  }

  AddToCart(CartForm:AddToCart):Observable<any>
  {
    return this._HttpClient.post(`${base2.Ur2}/api/Cart/add`,CartForm , {responseType:'text'})
  }

  getCart(id:any):Observable<Cart>
  {
    return this._HttpClient.get<Cart>(`${base2.Ur2}/api/Cart/${id}`)
  }

  Delete(DeletFromCart:AddToCart):Observable<any>
  {
    return this._HttpClient.delete<any>(`${base2.Ur2}/api/Cart/remove`, { body :DeletFromCart })
  }

  CheckOUtForm(CheckForm:CheckOut):Observable<any>
  {
    return this._HttpClient.post(`${base2.Ur2}/api/Order/checkout`,CheckForm,{responseType:"text"})
  }

  NearPharm(lat:any , long:any):Observable<getNear>
  {
    return this._HttpClient.get<getNear>(`${base2.Ur2}/api/Pharmacies/nearest?latitude=${lat}&longitude=${long}`)
  }
  
}
