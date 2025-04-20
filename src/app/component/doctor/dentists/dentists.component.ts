import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DocorGatogeoryService } from '../../../shared/services/Pages/docor-gatogeory.service';
import { Gatogoery } from '../../../shared/Interfaces/Pages/doctor-gatogery';
import { GatogeorurSearchPipePipe } from '../../../core/pipes/gatogeorur-search-pipe.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dentists',
  standalone: true,
  imports: [RouterLink , GatogeorurSearchPipePipe , FormsModule],
  templateUrl: './dentists.component.html',
  styleUrl: './dentists.component.css'
})
export class DentistsComponent implements OnInit {

  
 ngOnInit(): void {
   this.DentistDOctor()
 }
 
 spinner:boolean=false
 doctorsData!:Gatogoery
 userWord:string=''

 constructor(private _DocorGatogeoryService:DocorGatogeoryService){}

 DentistDOctor()
 {
  this.spinner=true
  this._DocorGatogeoryService.Dentist().subscribe({
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
