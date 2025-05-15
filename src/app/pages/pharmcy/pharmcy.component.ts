import { PharmacySliderComponent } from './../../addtions/pharmacy-slider/pharmacy-slider.component';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PharmcyService } from '../../shared/services/Pages/pharmcy.service';
import { LogInService } from '../../shared/services/athountocation/log-in.service';
import { ToastrService } from 'ngx-toastr';
import { getNear } from '../../shared/Interfaces/Pages/phahrmacy';


@Component({
  selector: 'app-pharmcy',
  standalone: true,
  imports: [RouterLink, PharmacySliderComponent],
  templateUrl: './pharmcy.component.html',
  styleUrl: './pharmcy.component.css'
})
export class PharmcyComponent   {
  constructor( 
    private _PharmcyService:PharmcyService ,
    private _LogInService:LogInService ,
    private _ToastrService:ToastrService
                                      ){}

  //#region Nearst
  handleFindNearest() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
  
        this.getNearPharm(lat, long);
      }, error => {
        alert('Location access denied or unavailable.');
        console.error(error);
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }
  Nearcom:getNear=[]
  showPopup = false;
  nearspin=false
  getNearPharm(lat:any , lomg:any)
  {
    this.nearspin=true
    this._PharmcyService.NearPharm(lat,lomg).subscribe({
      next:res=>{
        this.Nearcom=res
        console.log(res)
        this.showPopup = true;
        this.nearspin=false
      },
      error:err=>{
        console.log(err)
        this.nearspin=false
      }
    })
  }
  closePopup() {
    this.showPopup = false;
  }
  //#endregion
}


