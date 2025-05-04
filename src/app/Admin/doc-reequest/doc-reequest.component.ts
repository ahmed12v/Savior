import { Component, OnInit } from '@angular/core';
import { Docreq } from '../../shared/Interfaces/Admin/admi';
import { AdminWorkService } from '../../shared/services/Admin/admin-work.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-doc-reequest',
  standalone: true,
  imports: [],
  templateUrl: './doc-reequest.component.html',
  styleUrl: './doc-reequest.component.css'
})
export class DocReequestComponent implements OnInit{

  ngOnInit(): void {
    this.GetAllRequests()
  }
  constructor(private _AdminWorkService:AdminWorkService , private _ToastrService:ToastrService){}
DocReqCom:Docreq=[]
spin=false
AcepptSpan=false
rejectSpan=false
empty=false
//#region get
GetAllRequests()
{
  this.spin=true
  this._AdminWorkService.DocreqCome().subscribe({
    next:res=>{
      this.spin=false
      this.DocReqCom=res
     if(res.length===0)
     {
      this.empty=true
     }
    },
    error:err=>{
      this.spin=false

    }
  })
}

//#endregion Accept
AcceptNow(Accid:any)
{
  this.AcepptSpan=true
  this._AdminWorkService.AcceptDoc(Accid).subscribe({
    next:res=>{
      this.AcepptSpan=false
      this._ToastrService.info('Savior','Doctor Added to Our Website')
      this.GetAllRequests()
    },
    error:err=>{
      this.AcepptSpan=false
      this._ToastrService.error('Savior', 'Accept Failed')
    }
  })
}

RejecttNow(rejid:any)
{
  this.rejectSpan=true
  this._AdminWorkService.RejectDoc(rejid).subscribe({
    next:res=>{
      this.rejectSpan=false
      this._ToastrService.info('Savior','Doctor Rejected')
      this.GetAllRequests()
    },
    error:err=>{
      this.rejectSpan=false
      this._ToastrService.error('Savior', 'Rejected Failed')
    }
  })
}



}
