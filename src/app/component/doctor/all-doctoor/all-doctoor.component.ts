import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Doctor } from '../../../shared/Interfaces/Pages/doctor';
import { DoctorService } from '../../../shared/services/Pages/doctor.service';

@Component({
  selector: 'app-all-doctoor',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './all-doctoor.component.html',
  styleUrl: './all-doctoor.component.css'
})
export class AllDoctoorComponent implements OnInit {

   ngOnInit(): void {
      this.getAllDoc()
   }
  
   constructor(private _DocServices:DoctorService){}

doctor:any[] =[

   { 
      img:'../../../../assets/imege/doctor Photo.jpg' , loc : '10th of ramadan' ,
      Name :'Ahmed Sami' , title: 'One of the best dentists offered by Savior in 10th of Ramadan.',
      Appoint:'Sat , tues , thurs', date: '12 : 8' , rate:'5' 
   },
   { 
      img:'../../../../assets/imege/docWomen.jpg' , loc : 'New Cairo' ,
      Name :'Areen Ahmed' , title: 'One of the best Gynecologists offered by Savior in New Cairo.',
      Appoint:'Sat , Sun , tues , Wed', date: '10 : 10' , rate:'4.8' 
   },
   { 
      img:'../../../../assets/imege/doc(man1).jpg' , loc : 'Bader City' ,
      Name :'Mohamed Elmasry' , title: 'One of the best Cardiologists offered by Savior in Bader City.',
      Appoint:'All days of the week except friday', date: '3 : 12' , rate:'4.7' 
   },
   { 
      img:'../../../../assets/imege/women02.jpg' , loc : 'Nasr City' ,
      Name :'Fareida Hany' , title: 'One of the best Pediatricians offered by Savior in Nasr City .',
      Appoint:' Sun , Wed , Friday', date: '12 : 6' , rate:'4.4' 
   },
   { 
      img:'../../../../assets/imege/doc(man3).jpg' , loc : 'madienty' ,
      Name :'Ali Elmohamdy' , title: 'One of the best Optometrists offered by Savior in madienty.',
      Appoint:'Sat , Sun , tues', date: '12 : 12' , rate:'4.5' 
   },
   { 
      img:'../../../../assets/imege/Dr(man2).jpg' , loc : 'Elshrouk' ,
      Name :'Ahmed Elgarhy' , title: 'One of the best Psychiatrists offered by Savior in Elshrouk.',
      Appoint:' Sun , tues , Wed', date: '10 : 6' , rate:'4.6' 
   },

]
spinner:boolean=false
Doctordata!:Doctor;


 

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
