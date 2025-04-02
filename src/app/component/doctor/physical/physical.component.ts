import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-physical',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './physical.component.html',
  styleUrl: './physical.component.css'
})
export class PhysicalComponent {

  doctor:any[] =[

    { 
      img:'../../../../assets/imege/ph06.jpg' , loc : 'El-ebour' ,
      Name :'mohamed eltawil' , title: 'One of the best Physical therapy offered by Savior in El-ebour.',
      Appoint:'Sat , Sun , tues', date: '12 : 12' , rate:'4.5' 
   },
 
 ]

}
