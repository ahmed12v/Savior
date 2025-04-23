import { Component, OnInit } from '@angular/core';
import { getBooking } from '../../../shared/Interfaces/Pages/doctor';
import { DoctorService } from '../../../shared/services/Pages/doctor.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reservtion',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './reservtion.component.html',
  styleUrls: ['./reservtion.component.css']
})
export class ReservtionComponent implements OnInit {
  Spinner: boolean = false;
  Spinnerbtn: boolean = false;
  getData!: getBooking;
  IfEmpty: boolean = false;

  // Popup variables
  selectedBooking: any = null;
  showCancelPopup: boolean = false;
  cancelReason: string = '';
  otherReason: string = '';
  processingCancellation: boolean = false;

  constructor(private _DoctorService: DoctorService) {}

  ngOnInit(): void {
    this.bookingcome();
  }

  bookingcome() {
    this.Spinner = true;
    this._DoctorService.getBooking().subscribe({
      next:res=> {
        this.getData = res;
        this.Spinner = false;
        this.IfEmpty = !res || res.length === 0;
      },
      error: (err) => {
        console.log(err);
        this.Spinner = false;
      }
    });
  }

  openCancelPopup(booking: any) {
    this.selectedBooking = booking;
    this.showCancelPopup = true;
    this.cancelReason = '';
    this.otherReason = '';
  }

  closePopup() {
    this.showCancelPopup = false;
    this.processingCancellation = false;
  }

  confirmCancellation() {
    this.processingCancellation = true;
    this.Spinnerbtn = true;
    
    const cancellationData = {
      bookingId: this.selectedBooking.bookingID,
      reason: this.cancelReason === 'other' ? this.otherReason : this.cancelReason
    };

    this._DoctorService.CancelBook(this.selectedBooking.bookingID).subscribe({
      next: (res) => {
        this.showCancelPopup = false;
        this.processingCancellation = false;
        this.Spinnerbtn = false;
        this.bookingcome();
        this.showSuccessToast();
      },
      error: (err) => {
        this.processingCancellation = false;
        this.Spinnerbtn = false;
        this.showErrorToast();
        console.error(err);
      }
    });
  }

  showSuccessToast() {
    // Implement toast notification here
    console.log('Cancellation successful');
  }

  showErrorToast() {
    // Implement error toast here
    console.log('Cancellation failed');
  }
}