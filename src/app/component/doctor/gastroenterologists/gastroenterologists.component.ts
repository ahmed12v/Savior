import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gastroenterologists',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './gastroenterologists.component.html',
  styleUrl: './gastroenterologists.component.css'
})
export class GastroenterologistsComponent {

  doctor:any[] =[

    { 
       img:'../../../../assets/imege/ph03.jpg.jpg' , loc : 'Elshrouk' ,
       Name :'sami Ahmed' , title: 'One of the best gastroenterologists offered by Savior in Elshrouk.',
       Appoint:'Sat , tues , thurs', date: '12 : 8' , rate:'5' 
    },
    
 
 ]


}
