import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gynecologists',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './gynecologists.component.html',
  styleUrl: './gynecologists.component.css'
})
export class GynecologistsComponent {

  doctor:any[] =[

    { 
      img:'../../../../assets/imege/docWomen.jpg' , loc : 'New Cairo' ,
      Name :'Areen Ahmed' , title: 'One of the best Gynecologists offered by Savior in New Cairo.',
      Appoint:'Sat , Sun , tues , Wed', date: '10 : 10' , rate:'4.8' 
   },
 
 ]

}
