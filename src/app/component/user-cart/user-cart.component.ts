import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { getNear, Phahrmacy } from '../../shared/Interfaces/Pages/phahrmacy';
import { PharmcyService } from '../../shared/services/Pages/pharmcy.service';
import { LogInService } from '../../shared/services/athountocation/log-in.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-cart',
  standalone: true,
  imports: [RouterLink,  FormsModule, CommonModule , ReactiveFormsModule],
  templateUrl: './user-cart.component.html',
  styleUrl: './user-cart.component.css'
})
export class UserCartComponent implements OnInit{
  
ngOnInit(): void {
  this.getCartByID()
}

constructor( 
  private _PharmcyService:PharmcyService ,
  private _LogInService:LogInService ,
  private _ToastrService:ToastrService
                                    ){}

//#region Caart Coe
empty=false
spin=false
cart!:any
getCartByID()
{
  this._LogInService.UserDataAfterDecoded.subscribe((decodedToken) => {
    const userId = decodedToken.nameid;
    this.spin=true
    this._PharmcyService.getCart(userId).subscribe({
      next:res=>{
        console.log(res)
        this.spin=false
        this.cart=res
        
      },
      error:err=>{
        console.log(err)
        this.spin=false
          this.empty=true
        
      }
    })
  })
}
//#endregion

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

//#region  delete 

Addspi=false
  showAddForm = false;
  DeleteForm:FormGroup=new FormGroup ({
    userID:new FormControl(),
    medicineID:new FormControl(),
    quantity:new FormControl(),
    priceType:new FormControl(),
  })

  openAddToCartForm(medicineId: any) {
    this._LogInService.UserDataAfterDecoded.subscribe((decodedToken) => {
      const userId = decodedToken.nameid;
  
      this.DeleteForm.patchValue({
        userID: userId,
        medicineID: medicineId,
        quantity: 1,
        priceType: 'box'
      });
  
      this.showAddForm = true;
    });
  }

  Delete() 
  {
  this.Addspi=true
  if(this.DeleteForm.valid)
  {
    this._PharmcyService.Delete(this.DeleteForm.value).subscribe({
      next:res=>{
        console.log(res)
        this.showAddForm = false;
        this.Addspi=false
        this._ToastrService.info('Savior', 'Deleted Done')
        this.getCartByID()
      },
      error:err=>{
        console.log(err);
        this._ToastrService.error('savior', 'Deleted Failed')
        this.Addspi=false
      }
    })
  }
  }

//#endregion

}
