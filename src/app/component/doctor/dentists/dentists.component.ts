import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dentists',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dentists.component.html',
  styleUrl: './dentists.component.css'
})
export class DentistsComponent {

  doctor:any[] =[

    { 
       img:'../../../../assets/imege/doctor Photo.jpg' , loc : '10th of ramadan' ,
       Name :'Ahmed Sami' , title: 'One of the best dentists offered by Savior in 10th of Ramadan.',
       Appoint:'Sat , tues , thurs', date: '12 : 8' , rate:'5' 
    },
    
 
 ]

}
