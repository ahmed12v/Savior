import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Gatogoery } from '../../../shared/Interfaces/Pages/doctor-gatogery';
import { DocorGatogeoryService } from '../../../shared/services/Pages/docor-gatogeory.service';

@Component({
  selector: 'app-physical',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './physical.component.html',
  styleUrl: './physical.component.css'
})
export class PhysicalComponent implements OnInit{

  doctor:any[] =[

    { 
      img:'../../../../assets/imege/ph06.jpg' , loc : 'El-ebour' ,
      Name :'mohamed eltawil' , title: 'One of the best Physical therapy offered by Savior in El-ebour.',
      Appoint:'Sat , Sun , tues', date: '12 : 12' , rate:'4.5' 
   },
 
 ]


 ngOnInit(): void {
         this.PhysicalTherapyDOctor()
       }
       
       spinner:boolean=false
       doctorsData!:Gatogoery
      
       constructor(private _DocorGatogeoryService:DocorGatogeoryService){}
      
       PhysicalTherapyDOctor()
       {
        this.spinner=true
        this._DocorGatogeoryService.PhysicalTherapy().subscribe({
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
