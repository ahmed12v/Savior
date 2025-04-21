import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Gatogoery } from '../../../shared/Interfaces/Pages/doctor-gatogery';
import { DocorGatogeoryService } from '../../../shared/services/Pages/docor-gatogeory.service';
import { FormsModule } from '@angular/forms';
import { GatogeorurSearchPipePipe } from '../../../core/pipes/gatogeorur-search-pipe.pipe';
import { BookFormComponent } from '../book-form/book-form.component';

@Component({
  selector: 'app-throat',
  standalone: true,
  imports: [RouterLink , FormsModule , GatogeorurSearchPipePipe , BookFormComponent],
  templateUrl: './throat.component.html',
  styleUrl: './throat.component.css'
})
export class ThroatComponent implements OnInit {
 
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
             this.EarAndNoseDOctor()
           }
           
           spinner:boolean=false
           doctorsData!:Gatogoery
           userWord:string=''
          
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
