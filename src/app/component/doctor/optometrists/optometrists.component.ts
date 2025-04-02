import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-optometrists',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './optometrists.component.html',
  styleUrl: './optometrists.component.css'
})
export class OptometristsComponent {

  doctor:any[] =[

    { 
      img:'../../../../assets/imege/doc(man3).jpg' , loc : 'madienty' ,
      Name :'Ali Elmohamdy' , title: 'One of the best Optometrists offered by Savior in madienty.',
      Appoint:'Sat , Sun , tues', date: '12 : 12' , rate:'4.5' 
   },
 
 ]

}
