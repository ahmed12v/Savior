import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmegencyService } from '../../../shared/services/Pages/emegency.service';
import { LogInService } from '../../../shared/services/athountocation/log-in.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emergency-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './emergency-form.component.html',
  styleUrls: ['./emergency-form.component.css']
})
export class EmergencyFormComponent {
  @Input() isVisible: boolean = false;
  @Input() emergencyType: string = '';
  @Output() formClosed = new EventEmitter<void>();
  
  submitted = false;
  SpinBtn=false

  closeForm() {
    this.formClosed.emit(); 
  }

 RequestForm:FormGroup=new FormGroup({
  userID:new FormControl(),
  location:new FormControl(null , Validators.required),
  phone:new FormControl(null , Validators.required),
  type:new FormControl( Validators.required),
  isConfirmed:new FormControl(true , Validators.required),
 })

 constructor(

private _EmegencyService:EmegencyService,
private _LogInService:LogInService,
private _ToastrService:ToastrService,
private _Router:Router

 ){}

 request()
 {
   this.SpinBtn=true
     this._LogInService.UserDataAfterDecoded.subscribe((decodedToken)=>{
      const userid = decodedToken.nameid;

      this.RequestForm.patchValue({
        userID:userid
      })
     })
    //console.log(this.RequestForm.value);
    
     if(this.RequestForm.valid){
      this._EmegencyService.RequestEmergencyTeam(this.RequestForm.value).subscribe({
        next:res=>{
          console.log(res);
          this._ToastrService.success('Savior' ,  'requested done , Team will Call You   ')
          this.RequestForm.reset()
          this._Router.navigate(['/EmergencyUserRequested'])
             this.SpinBtn=false
        },
        error:err=>{
          console.log(err);
          this._ToastrService.error('Savior' ,  'Request Erorr')
             this.SpinBtn=false

        }
      })
     }
 }
  
}
