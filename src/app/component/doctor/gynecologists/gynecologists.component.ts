import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Gatogoery } from '../../../shared/Interfaces/Pages/doctor-gatogery';
import { DocorGatogeoryService } from '../../../shared/services/Pages/docor-gatogeory.service';
import { BookFormComponent } from '../book-form/book-form.component';

@Component({
  selector: 'app-gynecologists',
  standalone: true,
  imports: [RouterLink , BookFormComponent],
  templateUrl: './gynecologists.component.html',
  styleUrl: './gynecologists.component.css'
})
export class GynecologistsComponent implements OnInit {

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

 ngOnInit(): void {
      this.GynecologistDOctor()
    }
    
    spinner:boolean=false
    doctorsData!:Gatogoery
   
    constructor(private _DocorGatogeoryService:DocorGatogeoryService){}
   
    GynecologistDOctor()
    {
     this.spinner=true
     this._DocorGatogeoryService.Gynecologist().subscribe({
       next:res=>{
            console.log(res)
            this.spinner=false
           this.doctorsData=res
       },
       error:err=>{
         console.log(err);
         this.spinner=false
         
       }
       
     })
    }

}
