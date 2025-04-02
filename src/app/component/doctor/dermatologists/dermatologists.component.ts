import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dermatologists',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dermatologists.component.html',
  styleUrl: './dermatologists.component.css'
})
export class DermatologistsComponent {

  doctor:any[] =[

    { 
       img:'../../../../assets/imege/ph02.jpg' , loc : 'Bader' ,
       Name :'Ali Ebrahim' , title: 'One of the best dermatologists offered by Savior in Bader.',
       Appoint:'Sat , tues , thurs', date: '12 : 8' , rate:'5' 
    },
    
 
 ]

}
