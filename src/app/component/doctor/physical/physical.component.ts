import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Gatogoery } from '../../../shared/Interfaces/Pages/doctor-gatogery';
import { DocorGatogeoryService } from '../../../shared/services/Pages/docor-gatogeory.service';
import { FormsModule } from '@angular/forms';
import { GatogeorurSearchPipePipe } from '../../../core/pipes/gatogeorur-search-pipe.pipe';

@Component({
  selector: 'app-physical',
  standalone: true,
  imports: [RouterLink , FormsModule , GatogeorurSearchPipePipe],
  templateUrl: './physical.component.html',
  styleUrl: './physical.component.css'
})
export class PhysicalComponent implements OnInit{


 ngOnInit(): void {
         this.PhysicalTherapyDOctor()
       }
       
       spinner:boolean=false
       doctorsData!:Gatogoery
       userWord:string=''
      
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
