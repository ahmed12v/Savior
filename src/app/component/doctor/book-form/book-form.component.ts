import { Days, Doctor } from './../../../shared/Interfaces/Pages/doctor';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DoctorDetials } from '../../../shared/Interfaces/Pages/doctor';
import { DoctorService } from '../../../shared/services/Pages/doctor.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css'
})
export class BookFormComponent implements OnInit {

  //#region popup
  ngOnInit(): void {
    this.gitForm()
  }
  @Input() doctorID!: any;

  spinner:boolean=false
  GetFormContent!:DoctorDetials
  DoctorDays!:Days
  constructor(private _DoctorService:DoctorService ,){}

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


BooKNow:FormGroup=new FormGroup({
  day:new FormControl(null , Validators.required),
  phone:new FormControl(null , [Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)])
})

}
