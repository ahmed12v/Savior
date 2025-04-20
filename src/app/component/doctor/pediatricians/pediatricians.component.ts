import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Gatogoery } from '../../../shared/Interfaces/Pages/doctor-gatogery';
import { DocorGatogeoryService } from '../../../shared/services/Pages/docor-gatogeory.service';

@Component({
  selector: 'app-pediatricians',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pediatricians.component.html',
  styleUrl: './pediatricians.component.css'
})
export class PediatriciansComponent implements OnInit{

  doctor:any[] =[

    { 
      img:'../../../../assets/imege/ph05.jpg' , loc : 'madienty' ,
      Name :'Samir Abdelrahman' , title: 'One of the best Pediatricians offered by Savior in madienty.',
      Appoint:'Sat , Sun , tues', date: '12 : 12' , rate:'4.5' 
   },
 
 ]

 ngOnInit(): void {
        this.PediatriciansDOctor()
      }
      
      spinner:boolean=false
      doctorsData!:Gatogoery
     
      constructor(private _DocorGatogeoryService:DocorGatogeoryService){}
     
      PediatriciansDOctor()
      {
       this.spinner=true
       this._DocorGatogeoryService.Pediatricians().subscribe({
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
