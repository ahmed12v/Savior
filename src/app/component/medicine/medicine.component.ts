import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-medicine',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormsModule, CommonModule],
  templateUrl: './medicine.component.html',
  styleUrl: './medicine.component.css'
})
export class MedicineComponent {
  showAll: boolean = false;

  items: any[] = [
    { image: '../../../assets/imege/Panadol Advance 455x455.avif', title: 'Panadol', price: '30', featured: true },
    { image: '../../../assets/imege/catafast2.jpg', title: 'Catafast', price: '45', featured: true },
    { image: '../../../assets/imege/Augmentin.jpg', title: 'Augmentin', price: '128', featured: true },
    { image: '../../../assets/imege/Voltaren.jpg', title: 'Voltaren', price: '33', featured: true },
    { image: '../../../assets/imege/Antinal.jpg', title: 'Antinal', price: '23', featured: true },
    { image: '../../../assets/imege/Digest.avif', title: 'Digest', price: '18', featured: true },
    { image: '../../../assets/imege/Zyrtec.avif', title: 'Zyrtec', price: '40', featured: true },
    { image: '../../../assets/imege/Brufen.jpg', title: 'Brufen', price: '20', featured: true },
    { image: '../../../assets/imege/Lansoprazole.jpg', title: 'Lansoprazole', price: '35', featured: true },
    { image: '../../../assets/imege/Amoxicillin.jpg', title: 'Amoxicillin', price: '62', featured: true },
    { image: '../../../assets/imege/Paracetamol.jpeg', title: 'Paracetamol', price: '13', featured: true },
    { image: '../../../assets/imege/Flagyl.webp', title: 'Flagyl', price: '24', featured: true },
    { image: '../../../assets/imege/Ciprofloxacin.jpg', title: 'Ciprofloxacin', price: '42' },
    { image: '../../../assets/imege/Otrivin.webp', title: 'Otrivin', price: '26', featured: true },
    { image: '../../../assets/imege/Ventolin.jpg', title: 'Ventolin', price: '55', featured: true },
    { image: '../../../assets/imege/Dulcolax.jpg', title: 'Dulcolax', price: '22', featured: false },
  ];

  currentPage = 1;
  itemsPerPage = 4;

  get totalPages(): number {
    return Math.ceil(this.items.length / this.itemsPerPage);
  }

  get paginatedItems(): any[] {
    if (this.showAll) {
      return this.items;
    }
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.items.slice(startIndex, endIndex);
  }

  get visiblePages(): number[] {
    const pages = [];
    const maxVisible = 5;
    
    if (this.totalPages <= maxVisible) {
      for (let i = 1; i <= this.totalPages; i++) {
        pages.push(i);
      }
    } else {
      const half = Math.floor(maxVisible / 2);
      let start = Math.max(1, this.currentPage - half);
      let end = Math.min(this.totalPages, start + maxVisible - 1);
      
      if (end - start + 1 < maxVisible) {
        start = Math.max(1, end - maxVisible + 1);
      }
      
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
    }
    
    return pages;
  }

  get showStartDots(): boolean {
    return this.currentPage > 3 && this.totalPages > 5;
  }

  get showEndDots(): boolean {
    return this.currentPage < this.totalPages - 2 && this.totalPages > 5;
  }

  toggleViewMoreAndLess() {
    this.showAll = !this.showAll;
    if (this.showAll) {
      this.currentPage = 1;
    }
  }

  goToPage(page: number) {
    this.currentPage = page;
  }

  goToPrevPage() {
    if (this.currentPage > 1) {
      this.goToPage(this.currentPage - 1);
    }
  }

  goToNextPage() {
    if (this.currentPage < this.totalPages) {
      this.goToPage(this.currentPage + 1);
    }
  }

  goToFirstPage() {
    this.goToPage(1);
  }

  goToLastPage() {
    this.goToPage(this.totalPages);
  }
}