import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { UpdateUserDAte } from '../../../shared/Interfaces/Pages/profile';
import { ProfileService } from '../../../shared/services/Pages/profile.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-updat-his-data',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './updat-his-data.component.html',
  styleUrl: './updat-his-data.component.css'
})
export class UpdatHisDataComponent {

  spinner:boolean=false
  errorMsg!:UpdateUserDAte;

  constructor(private _ProfileService:ProfileService , private _router:Router , private _toaster:ToastrService){}

  UserUpdateDataform:FormGroup=new FormGroup({
    fname:new FormControl(null , [Validators.required , Validators.maxLength(12) , Validators.minLength(3)]),
    lname:new FormControl(null , [Validators.required , Validators.maxLength(12) , Validators.minLength(3)]),
    email:new FormControl(null , [Validators.required , Validators.email]),
    phone:new FormControl(null , [Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)]),
  })

  UpdateDate()
  {
    this.spinner=true
    if(this.UserUpdateDataform.valid){
      this._ProfileService.UpdateUserData(this.UserUpdateDataform.value).subscribe({
        next:res=>{
          console.log(res)
          this._toaster.success('Your Data Updated','')
          this._router.navigate(['/profile'])
          this.spinner=false
        },
        error:err=>{
          console.log(err)
          this.errorMsg=err.error;
          this._toaster.error('Erorr','')
          this.spinner=false
        }
      })
    }
  }

}
