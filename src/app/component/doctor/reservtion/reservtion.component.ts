import { Component, OnInit } from '@angular/core';
import { getBooking } from '../../../shared/Interfaces/Pages/doctor';
import { DoctorService } from '../../../shared/services/Pages/doctor.service';
import { error } from 'console';

@Component({
  selector: 'app-reservtion',
  standalone: true,
  imports: [],
  templateUrl: './reservtion.component.html',
  styleUrl: './reservtion.component.css'
})
export class ReservtionComponent implements OnInit{

  ngOnInit(): void {
    this.bookingcome()
  }

  //#region Declaration
  Spinner : boolean = false 
  Spinnerbtn : boolean = false 
  getData!:getBooking
  IfEmpty:boolean=false ;
  showPopover = false;
selectedBookId: any = null;
  //#endregion

constructor(private _DoctorService:DoctorService){}

//#region getbooking
 bookingcome()
 {
  this.Spinner=true
  this._DoctorService.getBooking().subscribe({
    next:res=>{
      console.log(res)
      this.getData=res
      this.Spinner=false
      if(! res || res.length=== 0){
        this.IfEmpty=true
        console.log('No booking come')
      }
      else{
        this.IfEmpty=false
      }
    },
    error:err=>{
      console.log(err);
      this.Spinner=false
    }
  })

 }
 //#endregion
  



togglePopover(bookId?: any) {
  this.showPopover = !this.showPopover;
  this.selectedBookId = bookId;
}

confirmCancel() {
  if (this.selectedBookId) {
    this.Spinnerbtn = true;
    this._DoctorService.CancelBook(this.selectedBookId).subscribe({
      next: res => {
        console.log(res);
        this.bookingcome();
        this.Spinnerbtn = false;
        this.showPopover = false;
        this.selectedBookId = null;
      },
      error: err => {
        console.log(err);
        this.Spinnerbtn = false;
        this.showPopover = false;
        this.selectedBookId = null;
      }
    });
  }
}
}
