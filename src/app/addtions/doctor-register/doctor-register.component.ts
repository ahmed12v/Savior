import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DoctorService } from '../../shared/services/Pages/doctor.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-doctor-register',
  standalone: true,
  imports: [ReactiveFormsModule ],
  templateUrl: './doctor-register.component.html',
  styleUrl: './doctor-register.component.css'
})
export class DoctorRegisterComponent {
  spinner:boolean=false
  constructor(private _DoctorService:DoctorService , private _ToastrModule:ToastrService){}

  DoctorForm:FormGroup= new FormGroup({
    fName:new FormControl(null , [Validators.required , Validators.minLength(3),Validators.maxLength(100)]),
    lName:new FormControl(null , [Validators.required , Validators.minLength(3),Validators.maxLength(100)]),
    email:new FormControl(null , [Validators.required , Validators.email]),
    city:new FormControl(null , [Validators.required , Validators.minLength(2),Validators.maxLength(50)]),
    specialty:new FormControl(null , [Validators.required , Validators.minLength(2),Validators.maxLength(100)]),
    clinicName:new FormControl(null , [Validators.required , Validators.minLength(2),Validators.maxLength(100)]),
    phoneNumber:new FormControl(null , [Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)]),
    medicalLicenseNumber:new FormControl(null , [Validators.required , Validators.pattern(/^\d{2}\/\d{4}\/\d{4,}$/)]),
    ssn:new FormControl(null , [Validators.required , Validators.pattern(/^[0-9]{14}$/)]),
  })

  SendDoctorToAdmin()
  {
    this.spinner=true
    if(this.DoctorForm.valid){
        this._DoctorService.DoctorRegester(this.DoctorForm.value).subscribe({
         next:res=>{
          this._ToastrModule.success('Savior','Thank you for providing your information')
          this._ToastrModule.success('Savior','We will review your details and get back to you soon')
          console.log(res)
          this.spinner=false
          this.DoctorForm.reset();
          
         },
         error:err=>{
          this._ToastrModule.error('Savior', 'Kindly ensure that your information is entered correctly')
          console.log(err)
          this.spinner=false
          this.DoctorForm.reset();

         }
        })


    }
  }

}
