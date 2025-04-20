import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Gatogoery } from '../../../shared/Interfaces/Pages/doctor-gatogery';
import { DocorGatogeoryService } from '../../../shared/services/Pages/docor-gatogeory.service';

@Component({
  selector: 'app-dermatologists',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dermatologists.component.html',
  styleUrl: './dermatologists.component.css'
})
export class DermatologistsComponent implements OnInit {

  doctor:any[] =[

    { 
       img:'../../../../assets/imege/ph02.jpg' , loc : 'Bader' ,
       Name :'Ali Ebrahim' , title: 'One of the best dermatologists offered by Savior in Bader.',
       Appoint:'Sat , tues , thurs', date: '12 : 8' , rate:'5' 
    },
    
 
 ]

 ngOnInit(): void {
    this.DermatologistsDOctor()
  }
  
  spinner:boolean=false
  doctorsData!:Gatogoery
 
  constructor(private _DocorGatogeoryService:DocorGatogeoryService){}
 
  DermatologistsDOctor()
  {
   this.spinner=true
   this._DocorGatogeoryService.Dermatologists().subscribe({
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
