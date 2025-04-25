import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-emergency-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './emergency-form.component.html',
  styleUrls: ['./emergency-form.component.css']
})
export class EmergencyFormComponent {
  @Input() emergencyType: string | null = null;
  @Output() formClosed = new EventEmitter<void>();

  name = '';
  location = '';

  submitForm() {
    if (this.name && this.location) {
      alert(`تم إرسال طلب ل: ${this.emergencyType}\nالاسم: ${this.name}\nالموقع: ${this.location}`);
      this.formClosed.emit();
    } else {
      alert('يرجى تعبئة جميع الحقول');
    }
  }

  closeForm() {
    this.formClosed.emit();
  }
}


