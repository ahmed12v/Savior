import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-emergency-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './emergency-form.component.html',
  styleUrls: ['./emergency-form.component.css']
})
export class EmergencyFormComponent {
  @Input() isVisible: boolean = false;
  @Input() emergencyType: string = '';
  @Output() formClosed = new EventEmitter<void>(); 

  formData = {
    name: '',
    phone: '',
    address: '',
    notes: ''
  };

  submitted = false;

  submitForm() {
    console.log(this.formData);
    this.submitted = true;

    setTimeout(() => {
      this.closeForm();
    }, 3000); 
  }

  closeForm() {
    this.formClosed.emit(); 
  }
}
