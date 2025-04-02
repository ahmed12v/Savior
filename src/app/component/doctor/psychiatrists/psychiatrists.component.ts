import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-psychiatrists',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './psychiatrists.component.html',
  styleUrl: './psychiatrists.component.css'
})
export class PsychiatristsComponent {
  
  doctor:any[] =[

    { 
      img:'../../../../assets/imege/ph07.jpg' , loc : 'El-ebour' ,
      Name :'Nourhan Ahmed' , title: 'One of the best psychiatrists  offered by Savior in El-ebour.',
      Appoint:'Sat , Sun , tues', date: '12 : 12' , rate:'4.5' 
   },
  ]

}
