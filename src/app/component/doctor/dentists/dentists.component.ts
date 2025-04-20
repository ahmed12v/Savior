import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DocorGatogeoryService } from '../../../shared/services/Pages/docor-gatogeory.service';
import { Gatogoery } from '../../../shared/Interfaces/Pages/doctor-gatogery';

@Component({
  selector: 'app-dentists',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dentists.component.html',
  styleUrl: './dentists.component.css'
})
export class DentistsComponent implements OnInit {

  doctor:any[] =[

    { 
       img:'../../../../assets/imege/doctor Photo.jpg' , loc : '10th of ramadan' ,
       Name :'Ahmed Sami' , title: 'One of the best dentists offered by Savior in 10th of Ramadan.',
       Appoint:'Sat , tues , thurs', date: '12 : 8' , rate:'5' 
    },
    
 
 ]
 ngOnInit(): void {
   this.DentistDOctor()
 }
 
 spinner:boolean=false
 doctorsData!:Gatogoery

 constructor(private _DocorGatogeoryService:DocorGatogeoryService){}

 DentistDOctor()
 {
  this.spinner=true
  this._DocorGatogeoryService.Dentist().subscribe({
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
