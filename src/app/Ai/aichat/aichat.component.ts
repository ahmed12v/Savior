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
    // إزالة روابط HTML و Django tags
    .replace(/<link[^>]*>.*?<\/link[^>]*>/gi, '')
    .replace(/{%[^%]*%}/g, '')

    // إزالة كلمات تقنية وبرمجية غير مفيدة
    .replace(/\b(?:filesystem|parseInt|herokuapp|IConfigurationBuilder|static|consciousness-awareness|configuration|nu_masalah|uggy|ourmet|SAFE|Conan|arah|hassregation_var)\b/gi, '')

    // إزالة الكلمات الإنجليزية القصيرة والعشوائية
    .replace(/\b[a-zA-Z]{1,3}\b/g, '')

    // إزالة الرموز غير المفيدة
    .replace(/[^\u0600-\u06FF\u0000-\u007F\s.,!?،؛:()\[\]«»"'*#\n\r-]/g, '')

    // تنسيق النقاط المرقمة أو التي تبدأ بنجمة
    .replace(/(?:^|\n)[\s]*[\d]+[.)\-–]+[\s]*/g, match => `\n${match.trim().replace(/[^0-9]/g, '')}. `)
    .replace(/(?:^|\n)[\s]*[*]+[\s]*/g, '\n- ')

    // إزالة الفراغات المكررة
    .replace(/\s{2,}/g, ' ')

    // تنسيق علامات الترقيم
    .replace(/\s+([.,!?،؛:»)\]])/g, '$1')
    .replace(/([.,!?،؛:«(\[])([^\s])/g, '$1 $2')

    // توحيد الفقرات
    .replace(/\n{3,}/g, '\n\n')
    .replace(/[ \t]+\n/g, '\n')

    // إزالة الأسطر الفارغة الزائدة
    .replace(/^[ \t]*[\r\n]/gm, '')

    // إزالة الرموز البرمجية الشائعة
    .replace(/[\[\]{}<>_\\|]/g, '')

    // تنسيق الأرقام المدمجة في النص إلى أسطر جديدة
    .replace(/(?:^|\s)(\d+)[.)-]\s*/g, '\n$1. ')

    // تنظيف المسافات الزائدة
    .replace(/\s{2,}/g, ' ')

    .replace(/_.*?[\s$]/g, ' ')

    
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
