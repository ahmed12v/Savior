import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PharmcyService } from '../../../shared/services/Pages/pharmcy.service';
import { getAllmed, Phahrmacy } from '../../../shared/Interfaces/Pages/phahrmacy';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LogInService } from '../../../shared/services/athountocation/log-in.service';

@Component({
  selector: 'app-medicine-detials',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './medicine-detials.component.html',
  styleUrl: './medicine-detials.component.css'
})
export class MedicineDetialsComponent implements OnInit{
 
  spin = false;
  allmedicine!:any

    constructor(private _PharmcyService: PharmcyService , private _ActivatedRoute:ActivatedRoute,
       private _ToastrService:ToastrService,
       private _LogInService:LogInService) {}
    ngOnInit(): void {
      this.getbyid();
    }

  getbyid() {
    this.spin = true;

    let id : any
  this._ActivatedRoute.params.subscribe({
    next:parameter=>{
      id= parameter ['id']
    }
  })
      
    this._PharmcyService.getMedicinebyid(id).subscribe({
      next: res => {
        this.spin = false;
        this.allmedicine = res;
       // console.log(res);
        
      },
      error: err => {
        this.spin = false;
        console.log(err);
      }
    });
  }
   //#region AddCart
    Addspi=false
    showAddForm = false;
    AddForm:FormGroup=new FormGroup ({
      userID:new FormControl(),
      medicineID:new FormControl(),
      quantity:new FormControl(),
      priceType:new FormControl(),
    })
  
    openAddToCartForm(medicineId: any) {
      this._LogInService.UserDataAfterDecoded.subscribe((decodedToken) => {
        const userId = decodedToken.nameid;
    
        this.AddForm.patchValue({
          userID: userId,
          medicineID: medicineId,
          quantity: 1,
          priceType: 'box'
        });
    
        this.showAddForm = true;
      });
    }
  
    AddNow() 
    {
    this.Addspi=true
    if(this.AddForm.valid)
    {
      this._PharmcyService.AddToCart(this.AddForm.value).subscribe({
        next:res=>{
          console.log(res)
          this.showAddForm = false;
          this.Addspi=false
          this._ToastrService.success('Savior', 'Added to Cart')
        },
        error:err=>{
          console.log(err);
          this._ToastrService.error('savior', 'Added Failed')
          this.Addspi=false
        }
      })
    }
    }
    //#endregion
}
