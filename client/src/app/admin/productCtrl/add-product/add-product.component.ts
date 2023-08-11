import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/productInterface';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  images: any[] = []
  constructor(private adminService: AdminService, private router: Router) { }
  uploadImg(event: any) {
    this.images = event.target.files
  }
  onSubmit(data: any) {
    const Data = new FormData()
    for (let i = 0; i < this.images.length; i++) { Data.append('pic', this.images[i]) }
    Data.append('title', data.title)
    Data.append('descrption', data.descrption)
    Data.append('price', data.price)
    Data.append('Brand', data.Brand)
    Data.append('quantity', data.quantity)
    Data.append('category', data.category)
    Data.append('color', data.color)
    this.adminService.addProduct(Data).subscribe({
      next: () => {
        this.router.navigateByUrl('admin/productList')
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }
  ngOnInit(): void {
  }

}
