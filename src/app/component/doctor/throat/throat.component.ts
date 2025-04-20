import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Gatogoery } from '../../../shared/Interfaces/Pages/doctor-gatogery';
import { DocorGatogeoryService } from '../../../shared/services/Pages/docor-gatogeory.service';

@Component({
  selector: 'app-throat',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './throat.component.html',
  styleUrl: './throat.component.css'
})
export class ThroatComponent implements OnInit {
  doctor:any[] =[

    { 
      img:'../../../../assets/imege/ph08.jpg' , loc : 'nasr city' ,
      Name :'Ebrahim nour-eldin' , title: 'One of the best Ear,nose,and throat offered by Savior in nasr city.',
      Appoint:'Sat , Sun , tues', date: '12 : 12' , rate:'4.5' 
   },
  ]

   ngOnInit(): void {
             this.EarAndNoseDOctor()
           }
           
           spinner:boolean=false
           doctorsData!:Gatogoery
          
           constructor(private _DocorGatogeoryService:DocorGatogeoryService){}
          
           EarAndNoseDOctor()
           {
            this.spinner=true
            this._DocorGatogeoryService.EarAndNose().subscribe({
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
