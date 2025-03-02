import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-medicine',
  standalone: true,
  imports: [RouterLink , RouterLinkActive],
  templateUrl: './medicine.component.html',
  styleUrl: './medicine.component.css'
})
export class MedicineComponent {

  showAll: boolean = false;

  items: any[] = [
    { image: '../../../assets/imege/Panadol Advance 455x455.avif', title: 'Panadol' , price: '30'},
    { image: '../../../assets/imege/catafast2.jpg', title: ' Catafast' , price: '45'},
    { image: '../../../assets/imege/Augmentin.jpg', title: 'Augmentin' , price: '128'},
    { image: '../../../assets/imege/Voltaren.jpg', title: 'Voltaren' , price: '33'},
    { image: '../../../assets/imege/Antinal.jpg', title: 'Antinal' , price: '23'},
    { image: '../../../assets/imege/Digest.avif', title: 'Digest' , price: '18'},
    { image: '../../../assets/imege/Zyrtec.avif', title: 'Zyrtec' , price: '40'},
    { image: '../../../assets/imege/Brufen.jpg', title: 'Brufen' , price: '20'},
    { image: '../../../assets/imege/Lansoprazole.jpg', title: 'Lansoprazole' , price: '35'},
    { image: '../../../assets/imege/Amoxicillin.jpg', title: 'Amoxicillin' , price: '62'},
    { image: '../../../assets/imege/Paracetamol.jpeg', title: 'Paracetamol' , price: '13'},
    { image: '../../../assets/imege/Flagyl.webp', title: 'Flagyl' , price: '24'},
    { image: '../../../assets/imege/Ciprofloxacin.jpg', title: 'Ciprofloxacin' , price: '42'},
    { image: '../../../assets/imege/Otrivin.webp', title: 'Otrivin' , price: '26'},
    { image: '../../../assets/imege/Ventolin.jpg', title: 'Ventolin' , price: '55'},
    { image: '../../../assets/imege/Dulcolax.jpg', title: 'Dulcolax' , price: '22'},
    
   
  ];

  toggleViewMoreAndLess() {
    this.showAll = !this.showAll;
  }

}
