import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PharmcyService } from '../../../shared/services/Pages/pharmcy.service';
import { getAllmed, Phahrmacy } from '../../../shared/Interfaces/Pages/phahrmacy';

@Component({
  selector: 'app-medicine-detials',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './medicine-detials.component.html',
  styleUrl: './medicine-detials.component.css'
})
export class MedicineDetialsComponent implements OnInit{
 
  spin = false;
  allmedicine!:any

    constructor(private _PharmcyService: PharmcyService , private _ActivatedRoute:ActivatedRoute) {}
    ngOnInit(): void {
      this.getbyid();
    }

  getbyid() {
    this.spin = true;

    let id : any
  this._ActivatedRoute.params.subscribe({
    next:parameter=>{
      id= parameter ['id']
    }
  })
      
    this._PharmcyService.getMedicinebyid(id).subscribe({
      next: res => {
        this.spin = false;
        this.allmedicine = res;
       // console.log(res);
        
      },
      error: err => {
        this.spin = false;
        console.log(err);
      }
    });
  }
}
