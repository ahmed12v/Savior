import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-medical-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './medical-form.component.html',
  styleUrl: './medical-form.component.css'
})
export class MedicalFormComponent {
  serviceForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.serviceForm = this.fb.group({
      fullName: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10,15}$')]],
      location: ['', Validators.required],
      caseType: ['', Validators.required],
      notes: ['']
    });
  }

  submitForm() {
    this.submitted = true;

    if (this.serviceForm.invalid) return;

    console.log('Form submitted:', this.serviceForm.value);
    alert('Your request has been submitted successfully!');
    this.serviceForm.reset();
    this.submitted = false;
  }
}
