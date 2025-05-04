import { Component, OnInit } from '@angular/core';
import { Doctor } from '../../shared/Interfaces/Pages/doctor';
import { DoctorService } from '../../shared/services/Pages/doctor.service';
import { RouterLink } from '@angular/router';
import { Docreq } from '../../shared/Interfaces/Admin/admi';
import { AdminWorkService } from '../../shared/services/Admin/admin-work.service';
import { HomeService } from '../../shared/services/Pages/home.service';
import { contact } from '../../shared/Interfaces/Pages/home';

@Component({
  selector: 'app-admin-work',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './admin-work.component.html',
  styleUrl: './admin-work.component.css'
})
export class AdminWorkComponent implements OnInit{
  //#region Declare
  Doctordata:Doctor =[]
  spinner=false
  empty=false
  spin=false
  DocReqCom:Docreq=[]
  FeedbackData:contact =[];
  //#endregion

ngOnInit(): void {
      this.getAllDoc()
      this.GetAllRequests()
      this.getAllFeeds()
   }
  
   constructor(
    private _DocServices:DoctorService ,
    private _AdminWorkService:AdminWorkService,
    private _HomeService:HomeService,
  ){}
 //#region Get
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

//
GetAllRequests()
{
  this.spin=true
  this._AdminWorkService.DocreqCome().subscribe({
    next:res=>{
      this.spin=false
      this.DocReqCom=res
     if(res.length===0)
     {
      this.empty=true
     }
    },
    error:err=>{
      this.spin=false

    }
  })
}
//
getAllFeeds()
{
  this._HomeService.getFeedback().subscribe({
     next:res=>{
       console.log(res)
       this.FeedbackData=res
     },
     error:err=>{
       console.log(err)
     }
  })
}
//#endregion
 
}
