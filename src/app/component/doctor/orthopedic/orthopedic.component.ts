import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-orthopedic',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './orthopedic.component.html',
  styleUrl: './orthopedic.component.css'
})
export class OrthopedicComponent {

  doctor:any[] =[

    { 
      img:'../../../../assets/imege/ph04.jpg' , loc : 'madienty' ,
      Name :' Abdelrahman saad' , title: 'One of the best orthopedic offered by Savior in madienty.',
      Appoint:'Sat , Sun , tues', date: '12 : 12' , rate:'4.5' 
   },
 
 ]

}
