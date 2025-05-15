import { Component } from '@angular/core';
import { PharmcyService } from '../../../shared/services/Pages/pharmcy.service';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LogInService } from '../../../shared/services/athountocation/log-in.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delivery-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './delivery-form.component.html',
  styleUrl: './delivery-form.component.css'
})
export class DeliveryFormComponent {
  spin = false;
  TakeOrder=false
  orderId:any

  constructor(
    private _PharmcyService: PharmcyService,
    private _ToastrService: ToastrService,
    private _LogInService: LogInService,
    private _ActivatedRoute:ActivatedRoute,
    private _Router:Router,
  ) {}

  //#region  checkOut
  checkForm: FormGroup = new FormGroup({
    userID: new FormControl( ),
    userLatitude: new FormControl(),
    userLongitude: new FormControl(),
    userPhone: new FormControl(null, Validators.required)
  });

  checkNow() {
    this.spin = true;
  
    this._LogInService.UserDataAfterDecoded.subscribe((decodedToken) => {
      const userId = decodedToken?.nameid;
  
      if (!userId) {
        this._ToastrService.error('User not found. Please login again.');
        this.spin = false;
        return;
      }
  
      // اطبع الـ userID للتأكيد
     // console.log('User ID from token:', userId);
  
      this.checkForm.patchValue({ userID: userId });
  
      // تحقق من صلاحية النموذج
      if (this.checkForm.valid) {
        console.log('Form Data:', this.checkForm.value);
  
        this._PharmcyService.CheckOUtForm(this.checkForm.value).subscribe({
          next: res => {
            console.log(res);
            this.spin = false;
            this.checkForm.reset()
            this.orderId=res //orderId
            this.TakeOrder=true
            this._ToastrService.success('',res.message)
          },
          error: err => {
            console.error('API Error:', err);
            const message = typeof err.error === 'string' ? err.error : 'An error occurred.';
            this._ToastrService.error(message);
            this.spin = false;
            this.checkForm.reset()
            this.locationSet=false
          }
        });
      } else {
        this.spin = false;
      }
    });
  }

  locationSet = false;  
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          this.checkForm.patchValue({
            userLatitude: latitude,
            userLongitude: longitude
          });

         // this._ToastrService.success('Location captured successfully');
          console.log("Lat:", latitude, "Long:", longitude);
          this.locationSet=true
        },
        (error) => {
          console.error(error);
          this._ToastrService.error('Failed to get location');
        }
      );
    } else {
      this._ToastrService.warning('Geolocation is not supported by this browser.');
    }
  }
  //#endregion
 conspan=false
  TakenOrder(orderid:any)
  {
    this.conspan=true
       this._PharmcyService.OrderConfirm(orderid).subscribe({
        next:res=>{
          console.log(res);
           this._ToastrService.success('',res.message)
           this.conspan=false
           this._Router.navigate(['/myOrder'])
        },
        error:err=>{
          console.log(err);
          this.conspan=false
          
        }
       })
  }
}
