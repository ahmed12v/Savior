import { Component, OnInit } from '@angular/core';
import { EmegencyService } from '../../shared/services/Pages/emegency.service';
import { reqUserCome } from '../../shared/Interfaces/Pages/emergency';
import { LogInService } from '../../shared/services/athountocation/log-in.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-emegencyrequest',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-emegencyrequest.component.html',
  styleUrl: './user-emegencyrequest.component.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(50px)' }),
        animate('1s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class UserEmegencyrequestComponent implements OnInit {

  ngOnInit(): void {
    this.DisplayRequest();
  }

  RequestComeSpin=false
  reqCome:reqUserCome=[]

  constructor(
    private _EmegencyService:EmegencyService,
    private _LogInService:LogInService,
    private _ToastrService:ToastrService

  ){}

  DisplayRequest()
  {
     this._LogInService.UserDataAfterDecoded.subscribe((decodedToken) => {
    const userId = decodedToken.nameid;
    this.RequestComeSpin=true
    this._EmegencyService.UserRequested(userId).subscribe({
    next:res=>{
      console.log(res);
      this.reqCome=res
      this.RequestComeSpin=false
    },

    error:err=>{
      console.log(err);
      this.RequestComeSpin=false
      this._ToastrService.error('Savior' , 'Display Erorr')
    }
    })
  })

 }
}
