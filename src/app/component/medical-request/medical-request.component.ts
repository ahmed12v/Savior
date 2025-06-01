import { Component, OnInit } from '@angular/core';
import { MedicalReCome } from '../../shared/Interfaces/Pages/emergency';
import { EmegencyService } from '../../shared/services/Pages/emegency.service';
import { LogInService } from '../../shared/services/athountocation/log-in.service';
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-medical-request',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './medical-request.component.html',
  styleUrl: './medical-request.component.css',
   animations: [
      trigger('fadeIn', [
        transition(':enter', [
          style({ opacity: 0, transform: 'translateY(50px)' }),
          animate('1s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
        ])
      ])
    ]
})
export class MedicalRequestComponent implements OnInit{
 ngOnInit(): void {
   
this.GetAllReq()

 }

 Spin=false
 empty=false
 ComeData:MedicalReCome=[]

 constructor(
  private _EmegencyService:EmegencyService
  ,private _LogInService:LogInService,
 ){}

 GetAllReq()
 {
  this.Spin=true
  this._LogInService.UserDataAfterDecoded.subscribe((decodedToken) =>{
   const userid = decodedToken.nameid;
   this._EmegencyService.UserMedicalMeberRequest(userid).subscribe({
    next:res=>{
      console.log(res);
      this.Spin=false
      this.ComeData=res
      if(res.length === 0)
      {
        this.empty=true
      }
    },
    error:err=>{
      console.log(err);
      this.Spin=false

    }
   })
  })
 }
}
