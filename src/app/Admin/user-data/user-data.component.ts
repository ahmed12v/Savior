import { Component, OnInit } from '@angular/core';
import { AdminWorkService } from '../../shared/services/Admin/admin-work.service';
import { AllUser, User } from '../../shared/Interfaces/Admin/admi';

@Component({
  selector: 'app-user-data',
  standalone: true,
  imports: [],
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.css'
})
export class UserDataComponent implements OnInit{
  ngOnInit(): void {
    this.AllUser()
  }

spin=false 
AllUserCome:User=[]

constructor(
  private _AdminWorkService:AdminWorkService,

){}

AllUser()
{
  this.spin=true
  this._AdminWorkService.GetAllUser().subscribe({
    next:res=>{
   this.AllUserCome=res
   this.spin=false
   console.log(res);
   
    },
    error:err=>{
      this.spin=false 
      console.log(err);
      
    }
  })
}

}
