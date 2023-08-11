import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/productInterface';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-all-product-category',
  templateUrl: './all-product-category.component.html',
  styleUrls: ['./all-product-category.component.css']
})
export class AllProductCategoryComponent implements OnInit {
  category: any[] = []
  constructor(private adminService: AdminService) { }
  categories() {
    this.adminService.categories().subscribe({
      next: (res: any) => {
        this.category = res
        console.log(this.categories)
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }
  ngOnInit(): void {
    this.categories()
  }
}
