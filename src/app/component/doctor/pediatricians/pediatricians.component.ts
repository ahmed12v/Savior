import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pediatricians',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pediatricians.component.html',
  styleUrl: './pediatricians.component.css'
})
export class PediatriciansComponent {

  doctor:any[] =[

    { 
      img:'../../../../assets/imege/ph05.jpg' , loc : 'madienty' ,
      Name :'Samir Abdelrahman' , title: 'One of the best Pediatricians offered by Savior in madienty.',
      Appoint:'Sat , Sun , tues', date: '12 : 12' , rate:'4.5' 
   },
 
 ]

}
