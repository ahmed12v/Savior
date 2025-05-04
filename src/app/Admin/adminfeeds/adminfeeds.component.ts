import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../shared/services/Pages/home.service';
import { contact } from '../../shared/Interfaces/Pages/home';

@Component({
  selector: 'app-adminfeeds',
  standalone: true,
  imports: [],
  templateUrl: './adminfeeds.component.html',
  styleUrl: './adminfeeds.component.css'
})
export class AdminfeedsComponent implements OnInit{

ngOnInit(): void {
  this.getAllFeeds()
}
constructor(
  private _HomeService:HomeService
){}

spin=false
FeedbackData:contact=[]

getAllFeeds()
{
this.spin=true
  this._HomeService.getFeedback().subscribe({
     next:res=>{
       console.log(res)
       this.FeedbackData=res
       this.spin=false
     },
     error:err=>{
       console.log(err)
       this.spin=false

     }
  })
}
}
