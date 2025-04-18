import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProfileService } from '../../../shared/services/Pages/profile.service';
import { Profile } from '../../../shared/Interfaces/Pages/profile';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  ngOnInit(): void {

    if (typeof localStorage != 'undefined') {
      localStorage.setItem('last Page', '/profile');
      ////////////////////////////call//////////////////////////
      this.GetMe();
    } else {
      console.warn('localStorage is not available in this environment.');
    }
  }
    
 



constructor(private _ProfileService:ProfileService){}
 
UserData!:Profile;
SpinnerData:boolean=false;

GetMe()
{
  this.SpinnerData=true;
 this._ProfileService.getMe().subscribe({
  
  next:res=>{
    this.SpinnerData=false;
    console.log(res)
    this.UserData=res;
  },
  error:err=>{
    this.SpinnerData=false;
    console.log(err)
  }
 })
}



}
