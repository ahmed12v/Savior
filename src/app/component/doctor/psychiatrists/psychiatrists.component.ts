import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Gatogoery } from '../../../shared/Interfaces/Pages/doctor-gatogery';
import { DocorGatogeoryService } from '../../../shared/services/Pages/docor-gatogeory.service';

@Component({
  selector: 'app-psychiatrists',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './psychiatrists.component.html',
  styleUrl: './psychiatrists.component.css'
})
export class PsychiatristsComponent implements OnInit{
  
  doctor:any[] =[

    { 
      img:'../../../../assets/imege/ph07.jpg' , loc : 'El-ebour' ,
      Name :'Nourhan Ahmed' , title: 'One of the best psychiatrists  offered by Savior in El-ebour.',
      Appoint:'Sat , Sun , tues', date: '12 : 12' , rate:'4.5' 
   },
  ]

  ngOnInit(): void {
           this.PsychiatristsDOctor()
         }
         
         spinner:boolean=false
         doctorsData!:Gatogoery
        
         constructor(private _DocorGatogeoryService:DocorGatogeoryService){}
        
         PsychiatristsDOctor()
         {
          this.spinner=true
          this._DocorGatogeoryService.Psychiatrists().subscribe({
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
