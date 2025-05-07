import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Phahrmacy } from '../../shared/Interfaces/Pages/phahrmacy';
import { PharmcyService } from '../../shared/services/Pages/pharmcy.service';
import { ToastrService } from 'ngx-toastr';
import { LogInService } from '../../shared/services/athountocation/log-in.service';

@Component({
  selector: 'app-medicine',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule , ReactiveFormsModule],
  templateUrl: './medicine.component.html',
  styleUrl: './medicine.component.css'
})
export class MedicineComponent implements OnInit {
  showAll: boolean = false;
  spin = false;
  allmedicine: Phahrmacy = [];
  currentPage = 1;
  itemsPerPage = 8;

  constructor(private _PharmcyService: PharmcyService , private _ToastrService:ToastrService,private _LogInService:LogInService) {}

  ngOnInit(): void {
    this.getAllmedicine();
    this.getCartByID()
  }
  getUserIdFromToken(){
    this._LogInService.UserDataAfterDecoded.subscribe((decodedToken) => {
        const userid = decodedToken.nameid; 
        return userid
      
      
    });
  }
  

  //#region AddCart
  Addspi=false
  showAddForm = false;
  AddForm:FormGroup=new FormGroup ({
    userID:new FormControl(),
    medicineID:new FormControl(),
    quantity:new FormControl(),
    priceType:new FormControl(),
  })

  openAddToCartForm(medicineId: any) {
    this._LogInService.UserDataAfterDecoded.subscribe((decodedToken) => {
      const userId = decodedToken.nameid;
  
      this.AddForm.patchValue({
        userID: userId,
        medicineID: medicineId,
        quantity: 1,
        priceType: 'box'
      });
  
      this.showAddForm = true;
    });
  }

  AddNow() 
  {
  this.Addspi=true
  if(this.AddForm.valid)
  {
    this._PharmcyService.AddToCart(this.AddForm.value).subscribe({
      next:res=>{
        console.log(res)
        this.showAddForm = false;
        this.Addspi=false
        this._ToastrService.success('Savior', 'Added to Cart')
        this.getCartByID()
      },
      error:err=>{
        console.log(err);
        this._ToastrService.error('savior', 'Added Failed')
        this.Addspi=false
      }
    })
  }
  }
  //#endregion
  
  cart!:any
  getCartByID()
{
  this._LogInService.UserDataAfterDecoded.subscribe((decodedToken) => {
    const userId = decodedToken.nameid;
    this.spin=true
    this._PharmcyService.getCart(userId).subscribe({
      next:res=>{
        console.log(res)
        this.spin=false
        this.cart=res
      },
      error:err=>{
        console.log(err)
        this.spin=false
      }
    })
  })
}

  getAllmedicine() {
    this.spin = true;
    this._PharmcyService.getAllMedicine().subscribe({
      next: res => {
        this.spin = false;
        this.allmedicine = res;
       // console.log(res);
        
      },
      error: err => {
        this.spin = false;
       // console.log(err);
      }
    });
  }

  get totalPages(): number {
    return Math.ceil(this.allmedicine.length / this.itemsPerPage);
  }

  get paginatedItems(): Phahrmacy {
    if (this.showAll) return this.allmedicine;
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.allmedicine.slice(startIndex, endIndex);
  }

  get visiblePages(): number[] {
    const pages = [];
    const maxVisible = 5;
    if (this.totalPages <= maxVisible) {
      for (let i = 1; i <= this.totalPages; i++) pages.push(i);
    } else {
      const half = Math.floor(maxVisible / 2);
      let start = Math.max(1, this.currentPage - half);
      let end = Math.min(this.totalPages, start + maxVisible - 1);
      if (end - start + 1 < maxVisible) start = Math.max(1, end - maxVisible + 1);
      for (let i = start; i <= end; i++) pages.push(i);
    }
    return pages;
  }

  get showStartDots(): boolean {
    return this.currentPage > 3 && this.totalPages > 5;
  }

  get showEndDots(): boolean {
    return this.currentPage < this.totalPages - 2 && this.totalPages > 5;
  }

  goToPage(page: number) {
    this.currentPage = page;
  }

  goToPrevPage() {
    if (this.currentPage > 1) this.goToPage(this.currentPage - 1);
  }

  goToNextPage() {
    if (this.currentPage < this.totalPages) this.goToPage(this.currentPage + 1);
  }

  goToFirstPage() {
    this.goToPage(1);
  }

  goToLastPage() {
    this.goToPage(this.totalPages);
  }

  toggleViewMoreAndLess() {
    this.showAll = !this.showAll;
    if (this.showAll) {
      this.currentPage = 1;
    }
  }
}
