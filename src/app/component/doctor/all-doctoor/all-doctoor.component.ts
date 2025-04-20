import { Component,  OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Doctor } from '../../../shared/Interfaces/Pages/doctor';
import { DoctorService } from '../../../shared/services/Pages/doctor.service';
import { FormsModule, } from '@angular/forms';
import { AlldoctorSearchPipePipe } from '../../../core/pipes/alldoctor-search-pipe.pipe';

@Component({
  selector: 'app-all-doctoor',
  standalone: true,
  imports: [RouterLink , FormsModule , AlldoctorSearchPipePipe],
  templateUrl: './all-doctoor.component.html',
  styleUrl: './all-doctoor.component.css'
})
export class AllDoctoorComponent implements OnInit {
 
   spinner:boolean=false
   Doctordata!:Doctor;
   userWord:string=''

   ngOnInit(): void {
      this.getAllDoc()
   }
  
   constructor(private _DocServices:DoctorService){}





 

getAllDoc()
{
   this.spinner=true
   this._DocServices.getAllDoctor().subscribe({
      next:res=>{
         console.log(res)
         this.Doctordata=res
         this.spinner=false
      },
      error:err=>{
         console.log(err)
         this.spinner=false
      }
   })
}

}
