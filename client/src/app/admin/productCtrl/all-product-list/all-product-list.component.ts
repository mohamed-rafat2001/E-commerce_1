import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/productInterface';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-all-product-list',
  templateUrl: './all-product-list.component.html',
  styleUrls: ['./all-product-list.component.css']
})
export class AllProductListComponent implements OnInit {
  product: Product[] = []
  productInfo = ['_id', "title", "descrption", "quantity", "color", "price", "Brand", "category", "update", "delete"]
  constructor(private adminService: AdminService) { }
  allProductList() {
    this.adminService.allProduct().subscribe({
      next: (res: any) => {
        this.product = res
        this.product.reverse()
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }
  deleteProduct(inx: any, _id: any) {
    this.adminService.deleteProduct(_id).subscribe({
      next: () => {
        this.product.splice(inx, 1)
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }
  ngOnInit(): void {
    this.allProductList()
  }

}
