import { Days, Doctor } from './../../../shared/Interfaces/Pages/doctor';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DoctorDetials } from '../../../shared/Interfaces/Pages/doctor';
import { DoctorService } from '../../../shared/services/Pages/doctor.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [ ReactiveFormsModule],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css'
})
export class BookFormComponent implements OnInit {
 
  //#region Declaration
  spinner:boolean=false
  GetFormContent!:DoctorDetials
  DoctorDays!:Days
  @Output() bookingCompleted = new EventEmitter<void>();
  @Input() doctorID!: any;
  //#endregion
  
  //#region popup
  ngOnInit(): void {
    this.gitForm()
    this.BooKNow.get('doctorId')?.setValue(this.doctorID);
  }
  
  gitForm()
  {
    const id = this.doctorID;
    if (!id) return;
   this.spinner=true

   this._DoctorService.DoctorDetiales(id).subscribe({
    next:res=>{
      this.spinner=false
      console.log(res)
      this.GetFormContent=res
      this.DoctorDays=res.dailyDays
    },
    error:err=>{
   console.log(err)
   this.spinner=false
    }
   })

  }
  //#endregion
 
  constructor(private _DoctorService:DoctorService , private _toaster:ToastrService, private _Router:Router){}

BooKNow:FormGroup=new FormGroup({
  day:new FormControl(null , Validators.required),
  phoneNumber:new FormControl(null , [Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)]),
  doctorId:new FormControl( 0 )
})

SendBook()
{
  if(this.BooKNow.valid){
    this.spinner=true
    this._DoctorService.BookNow(this.BooKNow.value).subscribe({
      next:res=>{
        console.log(res)
        this.spinner=false
        this._toaster.success('Booking Successful', 'Check your email spam for all the details 😊')
        this.bookingCompleted.emit()
        this.BooKNow.reset()
      },
      error:err=>{
        console.log(err)
        this.spinner=false
        this._toaster.error('Booking faield', 'try again')
        this.BooKNow.reset()


      }
    })
  }else{
    console.log('Form Erorr')
  }
}



}
