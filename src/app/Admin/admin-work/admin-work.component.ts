import { Component, OnInit } from '@angular/core';
import { Doctor } from '../../shared/Interfaces/Pages/doctor';
import { DoctorService } from '../../shared/services/Pages/doctor.service';
import { RouterLink } from '@angular/router';
import { Docreq, User } from '../../shared/Interfaces/Admin/admi';
import { AdminWorkService } from '../../shared/services/Admin/admin-work.service';
import { HomeService } from '../../shared/services/Pages/home.service';
import { contact } from '../../shared/Interfaces/Pages/home';
import { EmegencyService } from '../../shared/services/Pages/emegency.service';
import { PharmcyService } from '../../shared/services/Pages/pharmcy.service';

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
  UserSpin=false 
  AllUserCome:User=[]
  AllPharmOrder!:any
  AllEmerg!:any
  Allmedica!:any
  //#endregion

ngOnInit(): void {
      this.getAllDoc()
      this.GetAllRequests()
      this.getAllFeeds()
      this.AllUser()
      this.AllEmergency()
      this.AllOrder()
      this.AllMedical()
   }

   constructor(
    private _DocServices:DoctorService ,
    private _AdminWorkService:AdminWorkService,
    private _HomeService:HomeService,
    private _EmegencyService:EmegencyService,
    private _PharmcyService:PharmcyService,
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

//

AllMedical()
{
  this._EmegencyService.AllMedical().subscribe({
    next:res=>{
       console.log(res)
       this.Allmedica=res
     },
     error:err=>{
       console.log(err)
     }
  })
}

AllEmergency()
{
  this._EmegencyService.AllEmergency().subscribe({
    next:res=>{
       console.log(res)
       this.AllEmerg=res
     },
     error:err=>{
       console.log(err)
     }
  })
}
//

AllOrder()
{
  this._PharmcyService.AllOrder().subscribe({
    next:res=>{
       console.log(res)
       this.AllPharmOrder=res
     },
     error:err=>{
       console.log(err)
     }
  })
}
//

AllUser()
{
  this.UserSpin=true
  this._AdminWorkService.GetAllUser().subscribe({
    next:res=>{
   this.AllUserCome=res
   this.UserSpin=false
   console.log(res);
   
    },
    error:err=>{
      this.UserSpin=false 
      console.log(err);
      
    }
  })
}

//#endregion
 


}
