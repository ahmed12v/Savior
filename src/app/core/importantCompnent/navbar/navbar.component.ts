import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { LogInService } from '../../../shared/services/athountocation/log-in.service';
import { GoogleSignService } from '../../../shared/core/google-sign.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  loging:boolean=false;

constructor(private _router:Router , private _LogInService:LogInService , private _GoogleSignService:GoogleSignService){}
   
   closeNavbar(): void {
     const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse) {
       navbarCollapse.classList.remove('show');  
     }
   }

  
 ngOnInit(): void {
   
this._LogInService.UserDataAfterDecoded.subscribe(
   
  (log)=>{ 
       if(this._LogInService.UserDataAfterDecoded.getValue()!=null){
        this.loging=true
       }else{
        this.loging=false
       }
       
  }
  
)

 }

   logOut(){

    localStorage.removeItem('token');
    this._LogInService.UserDataAfterDecoded.next(null);
    this._router.navigate(['login'])

}

}
