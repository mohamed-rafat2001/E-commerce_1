import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/interfaces/productInterface';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  images: any[] = []
  constructor(private adminService: AdminService, private router: Router, private route: ActivatedRoute) { }
  uploadImg(event: any) {
    this.images = event.target.files
  }
  id: string = this.route.snapshot.params['id']
  product: Product = {}
  getProduct() {
    this.adminService.getProduct(this.id).subscribe({
      next: (res: any) => {
        this.product = res
      }
    })
  }
  onSubmit(data: any) {
    const Data = new FormData()
    if (this.images) {
      for (let i = 0; i < this.images.length; i++) { Data.append('pic', this.images[i]) }

    }
    delete data.images
    Data.append('title', data.title)
    Data.append('descrption', data.descrption)
    Data.append('price', data.price)
    Data.append('Brand', data.Brand)
    Data.append('quantity', data.quantity)
    Data.append('category', data.category)
    Data.append('color', data.color)
    this.adminService.updateProduct(Data, this.id).subscribe({
      next: (res: any) => {
        this.router.navigateByUrl('admin/productList')
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }

  ngOnInit(): void {
    this.getProduct()
  }

}
