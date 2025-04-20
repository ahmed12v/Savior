import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Gatogoery } from '../../../shared/Interfaces/Pages/doctor-gatogery';
import { DocorGatogeoryService } from '../../../shared/services/Pages/docor-gatogeory.service';

@Component({
  selector: 'app-orthopedic',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './orthopedic.component.html',
  styleUrl: './orthopedic.component.css'
})
export class OrthopedicComponent implements OnInit{

  doctor:any[] =[

    { 
      img:'../../../../assets/imege/ph04.jpg' , loc : 'madienty' ,
      Name :' Abdelrahman saad' , title: 'One of the best orthopedic offered by Savior in madienty.',
      Appoint:'Sat , Sun , tues', date: '12 : 12' , rate:'4.5' 
   },
 
 ]

 ngOnInit(): void {
       this.OrthopaedicDOctor()
     }
     
     spinner:boolean=false
     doctorsData!:Gatogoery
    
     constructor(private _DocorGatogeoryService:DocorGatogeoryService){}
    
     OrthopaedicDOctor()
     {
      this.spinner=true
      this._DocorGatogeoryService.Orthopaedic().subscribe({
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
