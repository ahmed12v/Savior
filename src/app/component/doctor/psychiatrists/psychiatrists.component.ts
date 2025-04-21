import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Gatogoery } from '../../../shared/Interfaces/Pages/doctor-gatogery';
import { DocorGatogeoryService } from '../../../shared/services/Pages/docor-gatogeory.service';
import { FormsModule } from '@angular/forms';
import { GatogeorurSearchPipePipe } from '../../../core/pipes/gatogeorur-search-pipe.pipe';
import { BookFormComponent } from '../book-form/book-form.component';

@Component({
  selector: 'app-psychiatrists',
  standalone: true,
  imports: [RouterLink , FormsModule ,GatogeorurSearchPipePipe , BookFormComponent],
  templateUrl: './psychiatrists.component.html',
  styleUrl: './psychiatrists.component.css'
})
export class PsychiatristsComponent implements OnInit{
  
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
           this.PsychiatristsDOctor()
         }
         
         spinner:boolean=false
         doctorsData!:Gatogoery
         userWord:string=''
        
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
