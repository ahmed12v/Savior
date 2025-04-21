import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DoctorService } from '../../../shared/services/Pages/doctor.service';
import { Doctor, DoctorDetials } from '../../../shared/Interfaces/Pages/doctor';
import { BookFormComponent } from '../book-form/book-form.component';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [ BookFormComponent],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent implements OnInit{
ViewDoctorDetails!:DoctorDetials
spinner:boolean=false

ngOnInit(): void {
   this.DoctorDetials()
}
constructor(private _DoctorService:DoctorService , private _ActivatedRoute:ActivatedRoute){}

//#region 
selectedDoctorID: string | null = null;

openBookingPopup(doctorID: any
) {
this.selectedDoctorID = doctorID;
}

closePopup() {
 this.selectedDoctorID = null;
}
//#endregion
  
DoctorDetials()
{
  let id : any
  this._ActivatedRoute.params.subscribe({
    next:parameter=>{
      id= parameter ['id']
    }
  })

  this.spinner=true
  this._DoctorService.DoctorDetiales(id).subscribe({
   next:res=>{
    console.log(res)
    this.spinner=false
    this.ViewDoctorDetails=res
   },
   error:err=>{
    console.log(err)
    this.spinner=false
   }
  })
}
}

