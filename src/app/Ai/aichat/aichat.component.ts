import { Component, OnInit } from '@angular/core';
import { AichatService } from '../../shared/services/Ai/aichat.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-aichat',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './aichat.component.html',
  styleUrls: ['./aichat.component.css']
})
export class AichatComponent {

  
  userInput = '';
  aiResponse = '';
  isLoading = false;
  errorMessage = '';

  constructor(private aiService: AichatService) {}

  async send() {
    if (!this.userInput.trim()) {
      this.errorMessage = 'يرجى إدخال نص.';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    try {
      this.aiResponse = await this.aiService.askOpenAI(this.userInput);
    } catch (error) {
      console.error(error);
      this.errorMessage = 'حدث خطأ أثناء الاتصال بـ OpenAI. حاول مجددًا لاحقًا.';
    } finally {
      this.isLoading = false;
    }
  }
}
