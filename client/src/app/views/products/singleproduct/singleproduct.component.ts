import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cart } from 'src/app/interfaces/cartInterface';
import { Product } from 'src/app/interfaces/productInterface';
import { User } from 'src/app/interfaces/userInterface';
import { AdminService } from 'src/app/services/admin/admin.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.css']
})
export class SingleproductComponent implements OnInit {

  constructor(private adminService: AdminService, private cartService: CartService, private route: ActivatedRoute, private authService: AuthService) { }
  id: string = this.route.snapshot.params['id']
  productt: Product = {}
  singleProduct() {
    this.adminService.getProduct(this.id).subscribe({
      next: (res: any) => {
        this.productt = res
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }
  user?: User = {}
  getUser() {
    this.authService.profile().subscribe({
      next: (res: any) => {
        this.user = res
      },
      error: (err: any) => { }
    })
  }
  toWishList() {
    this.authService.addWishList(this.id).subscribe({
      next: (res: any) => {
        return this.user = res
      },
      error: (err: any) => console.log(err)
    })
  }
  add1() {
    if (this.user) {
      let pro = this.user.wishList?.includes(this.id)
      if (pro == true) {
        return true
      }
      return false
    }
    else {
      return false
    }
  }
  cart: Cart = {}
  submit(data: any) {
    this.cartService.addToCart({ products: [{ product: data.product, count: data.count, color: data.color }] }).subscribe({
      next: (res: any) => {
        this.cart = res
        console.log(res)
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }

  ngOnInit(): void {
    this.singleProduct()
    this.getUser()
  }

}
