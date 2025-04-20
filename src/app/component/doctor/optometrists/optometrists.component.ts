import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Gatogoery } from '../../../shared/Interfaces/Pages/doctor-gatogery';
import { DocorGatogeoryService } from '../../../shared/services/Pages/docor-gatogeory.service';

@Component({
  selector: 'app-optometrists',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './optometrists.component.html',
  styleUrl: './optometrists.component.css'
})
export class OptometristsComponent implements OnInit {

  doctor:any[] =[

    { 
      img:'../../../../assets/imege/doc(man3).jpg' , loc : 'madienty' ,
      Name :'Ali Elmohamdy' , title: 'One of the best Optometrists offered by Savior in madienty.',
      Appoint:'Sat , Sun , tues', date: '12 : 12' , rate:'4.5' 
   },
 
 ]

  ngOnInit(): void {
       this.OptometristsDOctor()
     }
     
     spinner:boolean=false
     doctorsData!:Gatogoery
    
     constructor(private _DocorGatogeoryService:DocorGatogeoryService){}
    
     OptometristsDOctor()
     {
      this.spinner=true
      this._DocorGatogeoryService.Optometrists().subscribe({
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
