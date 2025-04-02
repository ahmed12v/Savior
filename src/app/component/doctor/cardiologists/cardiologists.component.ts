import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cardiologists',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cardiologists.component.html',
  styleUrl: './cardiologists.component.css'
})
export class CardiologistsComponent {

  doctor:any[] =[

    { 
       img:'../../../../assets/imege/ph01.jpg' , loc : 'nasr city' ,
       Name :'Ahmed hkaled' , title: 'One of the best cardiologists offered by Savior in nasr city.',
       Appoint:'Sat , tues , thurs', date: '12 : 8' , rate:'5' 
    },
    
 
 ]

}
