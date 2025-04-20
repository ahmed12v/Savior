import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Gatogoery } from '../../../shared/Interfaces/Pages/doctor-gatogery';
import { DocorGatogeoryService } from '../../../shared/services/Pages/docor-gatogeory.service';

@Component({
  selector: 'app-cardiologists',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cardiologists.component.html',
  styleUrl: './cardiologists.component.css'
})
export class CardiologistsComponent implements OnInit{

  doctor:any[] =[

    { 
       img:'../../../../assets/imege/ph01.jpg' , loc : 'nasr city' ,
       Name :'Ahmed hkaled' , title: 'One of the best cardiologists offered by Savior in nasr city.',
       Appoint:'Sat , tues , thurs', date: '12 : 8' , rate:'5' 
    },
    
 
 ]


ngOnInit(): void {
   this.CardiologistsDOctor()
 }
 
 spinner:boolean=false
 doctorsData!:Gatogoery

 constructor(private _DocorGatogeoryService:DocorGatogeoryService){}

 CardiologistsDOctor()
 {
  this.spinner=true
  this._DocorGatogeoryService.Cardiologist().subscribe({
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
