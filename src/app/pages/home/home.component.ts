import { AfterViewInit, Component } from '@angular/core';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {
  details:any[]= [
     {tittle:'Pharmacy & Medicine' , detals:'You can search for the nearest pharmacy, search for the treatment you want, add it to your cart, and then it will be delivered to you through us. ',
      route:'/pharmcy' , icon:' fa-solid fa-prescription-bottle-medical fs-2 icon-des '
      },
     {tittle:'Pharmacy & Medicine' , detals:'You can search for the nearest pharmacy, search for the treatment you want, add it to your cart, and then it will be delivered to you through us. ',
      route:'/pharmcy' , icon:' fa-solid fa-prescription-bottle-medical fs-2 icon-des '
      },
     {tittle:'Pharmacy & Medicine' , detals:'You can search for the nearest pharmacy, search for the treatment you want, add it to your cart, and then it will be delivered to you through us. ',
      route:'/pharmcy' , icon:' fa-solid fa-prescription-bottle-medical fs-2 icon-des '
      },
     {tittle:'Pharmacy & Medicine' , detals:'You can search for the nearest pharmacy, search for the treatment you want, add it to your cart, and then it will be delivered to you through us. ',
      route:'/pharmcy' , icon:' fa-solid fa-prescription-bottle-medical fs-2 icon-des '
      },
     {tittle:'Pharmacy & Medicine' , detals:'You can search for the nearest pharmacy, search for the treatment you want, add it to your cart, and then it will be delivered to you through us. ',
      route:'/pharmcy' , icon:' fa-solid fa-prescription-bottle-medical fs-2 icon-des '
      },
     {tittle:'Pharmacy & Medicine' , detals:'You can search for the nearest pharmacy, search for the treatment you want, add it to your cart, and then it will be delivered to you through us. ',
      route:'/pharmcy' , icon:' fa-solid fa-prescription-bottle-medical fs-2 icon-des '
      },
  ]
 
}
