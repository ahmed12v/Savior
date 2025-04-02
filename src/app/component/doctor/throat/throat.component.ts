import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-throat',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './throat.component.html',
  styleUrl: './throat.component.css'
})
export class ThroatComponent {
  doctor:any[] =[

    { 
      img:'../../../../assets/imege/ph08.jpg' , loc : 'nasr city' ,
      Name :'Ebrahim nour-eldin' , title: 'One of the best Ear,nose,and throat offered by Savior in nasr city.',
      Appoint:'Sat , Sun , tues', date: '12 : 12' , rate:'4.5' 
   },
  ]
}
