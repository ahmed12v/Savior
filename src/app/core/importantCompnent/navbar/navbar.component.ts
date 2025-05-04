import {  Component,  OnInit,  } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { LogInService } from '../../../shared/services/athountocation/log-in.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit  {
  
  logingUser:boolean=false;
  logingAdmin:boolean=false;
  sidebarOpen!: boolean;

constructor(private _router:Router , private _LogInService:LogInService , private _ToastrService:ToastrService ){}
   
   toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
}

closeSidebar() {
    this.sidebarOpen = false;
}
ngOnInit(): void {
  this._LogInService.UserDataAfterDecoded.subscribe((decodedToken) => {
    if (decodedToken) {
      const roles = decodedToken.roles || decodedToken.role || []; 
      this.logingAdmin = roles.includes('Admin');
      this.logingUser = roles.includes('User');
    } else {
      this.logingAdmin = false;
      this.logingUser = false;
    }
  });
}

   logOut(){
    localStorage.removeItem('token');
    this._LogInService.UserDataAfterDecoded.next(null);
    this._router.navigate(['/login'])
    this._ToastrService.info('bye bye', ' We hope you had a helpful experience and enjoyed it ')

}

//new 



}
