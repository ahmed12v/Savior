import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import {  NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/importantCompnent/navbar/navbar.component';
import { FooterComponent } from './core/importantCompnent/footer/footer.component';
import { isPlatformBrowser } from '@angular/common';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Savior';
  constructor(private _Router:Router ,  @Inject(PLATFORM_ID) private platformId: Object){}

  ngOnInit(): void {
  
    if (isPlatformBrowser(this.platformId)) {
      this._Router.events.subscribe((event =>{
        if(event instanceof NavigationEnd ){
          localStorage.setItem('lastVisitedPage', event.urlAfterRedirects);
        }
       }));
    
       const lastVisitedPage = localStorage.getItem('lastVisitedPage');
        if (lastVisitedPage) {
          this._Router.navigateByUrl(lastVisitedPage);
        } else {
    
          this._Router.navigate(['/about']);
        } 
    
    }
 
  

  }

  


  isDarkMode = false;

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;

    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  } ;

  
  
  
}
