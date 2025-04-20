import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Gatogoery } from '../../../shared/Interfaces/Pages/doctor-gatogery';
import { DocorGatogeoryService } from '../../../shared/services/Pages/docor-gatogeory.service';

@Component({
  selector: 'app-gynecologists',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './gynecologists.component.html',
  styleUrl: './gynecologists.component.css'
})
export class GynecologistsComponent implements OnInit {

  doctor:any[] =[

    { 
      img:'../../../../assets/imege/docWomen.jpg' , loc : 'New Cairo' ,
      Name :'Areen Ahmed' , title: 'One of the best Gynecologists offered by Savior in New Cairo.',
      Appoint:'Sat , Sun , tues , Wed', date: '10 : 10' , rate:'4.8' 
   },
 
 ]

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
