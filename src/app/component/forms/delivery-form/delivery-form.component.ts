import { Component } from '@angular/core';
import { PharmcyService } from '../../../shared/services/Pages/pharmcy.service';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LogInService } from '../../../shared/services/athountocation/log-in.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delivery-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './delivery-form.component.html',
  styleUrl: './delivery-form.component.css'
})
export class DeliveryFormComponent {
  spin = false;

  constructor(
    private _PharmcyService: PharmcyService,
    private _ToastrService: ToastrService,
    private _LogInService: LogInService,
    private _ActivatedRoute:ActivatedRoute
  ) {}

  checkForm: FormGroup = new FormGroup({
    cartID: new FormControl(null, Validators.required),
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
  
      this.checkForm.patchValue({ cartID: '' });
  
      // تحقق من صلاحية النموذج
      if (this.checkForm.valid) {
        console.log('Form Data:', this.checkForm.value);
  
        this._PharmcyService.CheckOUtForm(this.checkForm.value).subscribe({
          next: res => {
            console.log(res);
            this.spin = false;
            this.checkForm.reset()
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
        this._ToastrService.warning("Please complete the form.");
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
}
