import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Gatogoery } from '../../../shared/Interfaces/Pages/doctor-gatogery';
import { DocorGatogeoryService } from '../../../shared/services/Pages/docor-gatogeory.service';
import { GatogeorurSearchPipePipe } from '../../../core/pipes/gatogeorur-search-pipe.pipe';
import { FormsModule } from '@angular/forms';
import { BookFormComponent } from '../book-form/book-form.component';

@Component({
  selector: 'app-pediatricians',
  standalone: true,
  imports: [RouterLink , GatogeorurSearchPipePipe , FormsModule ,BookFormComponent],
  templateUrl: './pediatricians.component.html',
  styleUrl: './pediatricians.component.css'
})
export class PediatriciansComponent implements OnInit{

  //#region 
  selectedDoctorID: string | null = null;

  openBookingPopup(doctorID: any
  ) {
  this.selectedDoctorID = doctorID;
  }

  closePopup() {
   this.selectedDoctorID = null;
  }
  //#endregion

 ngOnInit(): void {
        this.PediatriciansDOctor()
      }
      
      spinner:boolean=false
      doctorsData!:Gatogoery
      userWord:string=''
     
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
