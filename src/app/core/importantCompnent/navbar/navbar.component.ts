import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

   closeNavbar(): void {
     const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse) {
       navbarCollapse.classList.remove('show');  
     }
   }
 





}
