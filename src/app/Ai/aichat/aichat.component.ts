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

  
}
