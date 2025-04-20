import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Gatogoery } from '../../../shared/Interfaces/Pages/doctor-gatogery';
import { DocorGatogeoryService } from '../../../shared/services/Pages/docor-gatogeory.service';

@Component({
  selector: 'app-gastroenterologists',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './gastroenterologists.component.html',
  styleUrl: './gastroenterologists.component.css'
})
export class GastroenterologistsComponent implements OnInit {

  doctor:any[] =[

    { 
       img:'../../../../assets/imege/ph03.jpg.jpg' , loc : 'Elshrouk' ,
       Name :'sami Ahmed' , title: 'One of the best gastroenterologists offered by Savior in Elshrouk.',
       Appoint:'Sat , tues , thurs', date: '12 : 8' , rate:'5' 
    },
    
 
 ]

 ngOnInit(): void {
     this.GastroenteritisDOctor()
   }
   
   spinner:boolean=false
   doctorsData!:Gatogoery
  
   constructor(private _DocorGatogeoryService:DocorGatogeoryService){}
  
   GastroenteritisDOctor()
   {
    this.spinner=true
    this._DocorGatogeoryService.Gastroenteritis().subscribe({
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
