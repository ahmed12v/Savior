import { withFetch } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AichatService } from '../../shared/services/Ai/aichat.service';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-aichat',
  standalone: true,
  imports: [ReactiveFormsModule , RouterLink],
  templateUrl: './aichat.component.html',
  styleUrls: ['./aichat.component.css']
})
export class AichatComponent {
constructor(
private _AichatService:AichatService
){}

resultComeFromAi=false
result!:any
resultSpinner=false
btn=false

CaseForm:FormGroup=new FormGroup({
  message:new FormControl('',Validators.required)
})
cleanText(text: string): string {
  return text
    .replace(/[^\u0000-\u007F\u0600-\u06FF\s.,!?،؛:\n\r]/g, '') 
    .replace(/\s{2,}/g, ' ')  
    .replace(/\n{3,}/g, '\n\n')  
    .trim();  
}


SendCase() {
  this.resultSpinner = true;
  if (this.CaseForm.valid) {
    const message = this.CaseForm.get('message')?.value;
    this._AichatService.Chat(this.CaseForm.value.message).subscribe({
      next: result => {
        console.log(result);
        this.resultComeFromAi = true;
        this.resultSpinner = false;
        const cleanedResponse = this.cleanText(result);
        this.result = cleanedResponse;
        this.CaseForm.reset()
        this.btn=true
      },
      error: err => {
        console.error(err);
        this.resultSpinner = false;
        this.CaseForm.reset()

      }
    });
  }
}

  
}
