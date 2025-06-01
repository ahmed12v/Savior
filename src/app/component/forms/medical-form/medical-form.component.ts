import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmegencyService } from '../../../shared/services/Pages/emegency.service';
import { LogInService } from '../../../shared/services/athountocation/log-in.service';
import { ToastrService } from 'ngx-toastr';
import { Members } from '../../../shared/Interfaces/Pages/emergency';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medical-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './medical-form.component.html',
  styleUrl: './medical-form.component.css'
})
export class MedicalFormComponent implements OnInit {
  //#region declaration
  formbtnspin=false
  memberSpin=false
  AllMembers:Members=[]
  //#endregion
  ngOnInit(): void {
    this.GetAllMembers()
  }
  constructor(
    private _EmegencyService:EmegencyService,
    private _LogInService:LogInService,
    private _ToastrService:ToastrService,
    private _Router:Router
  ){}

  //#region MemberRequest
  serviceForm:FormGroup=new FormGroup({
    userId:new FormControl( null,Validators.required),
    fullName:new FormControl(null,Validators.required),
    phoneNumber:new FormControl(null,Validators.required),
    location:new FormControl(null,Validators.required),
    medicalStaffMemberId:new FormControl(null,Validators.required),
    requestDate:new FormControl(null,Validators.required),
    notes:new FormControl(null,Validators.required),
  })

  SendToRequest()
  {
    this.formbtnspin=true
    this._LogInService.UserDataAfterDecoded.subscribe((decodedToken)=>{
      const userid = decodedToken.nameid;

      this.serviceForm.patchValue({
        userId:userid
      })
     })
    
     this._EmegencyService.RequestMedicalMember(this.serviceForm.value).subscribe({
       next:res=>{
        console.log(res);
        this._ToastrService.success('Savior' , 'Medical Member go To Your location')
        this.formbtnspin=false
        this.serviceForm.reset()
        this._Router.navigate(['/MedicalMemberRequest'])
       },
       error:err=>{
        console.log(err);
        this._ToastrService.error('Erorr')
        this.formbtnspin=false
        this.serviceForm.reset()
       }
     })
  }
//#endregion

  //#region GetAllMember
  GetAllMembers()
  {
    this.memberSpin=true
    this._EmegencyService.AllMembers().subscribe({
      next:res=>{
        this.memberSpin=false
        this.AllMembers=res
        console.log(res);
        
      },
      error:err=>{
        this.memberSpin=false
        console.log(err);
        
      }
    })
  }
  //#endregion
}
