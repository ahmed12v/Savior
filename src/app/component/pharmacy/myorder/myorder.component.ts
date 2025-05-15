import { Component, OnInit } from '@angular/core';
import { PharmcyService } from '../../../shared/services/Pages/pharmcy.service';
import { LogInService } from '../../../shared/services/athountocation/log-in.service';
import { MyOrder } from '../../../shared/Interfaces/Pages/phahrmacy';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-myorder',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './myorder.component.html',
  styleUrl: './myorder.component.css'
})
export class MyorderComponent implements OnInit{
ngOnInit(): void {
  this.order()
}
orderSpin=false
myorder:MyOrder=[]
date:any
emperty=false

constructor(
  private _PharmcyService:PharmcyService,
  private _LogInService:LogInService
){}

order()
{
  this.orderSpin=true
  this._LogInService.UserDataAfterDecoded.subscribe((decodedToken)=>{
          const userId = decodedToken?.nameid;

         this._PharmcyService.getmyOrder(userId).subscribe({
        next:res=>{
          console.log(res);
          
           this.orderSpin=false
           this.myorder=res
           if(res.length === 0)
           {
              this.emperty=true
           }
           this.date=res.map(order => ({
          ...order,
          orderDate: new Date(order.orderDate)
        }));
        },
        error:err=>{
          console.log(err);
        }
   })
  })
 
}
}
