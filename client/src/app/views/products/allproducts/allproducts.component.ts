import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from 'src/app/interfaces/cartInterface';
import { Product } from 'src/app/interfaces/productInterface';
import { User } from 'src/app/interfaces/userInterface';
import { AdminService } from 'src/app/services/admin/admin.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {
  product: Product[] = []
  user?: User = {}
  cart: Cart = {}
  constructor(private adminService: AdminService, private authService: AuthService, private cartService: CartService,
    private router: Router
  ) { }
  allProduct() {
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
  rate(rate: any, _id: any) {
    this.adminService.ratingProduct({ star: rate.target.value }, _id).subscribe({
      next: (res: any) => {
        return res
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }
  views(id: any) {

    this.router.navigateByUrl('/singleProduct/' + id)
  }

  getUser() {
    this.authService.profile().subscribe({
      next: (res: any) => {
        this.user = res
      },
      error: (err: any) => console.log(err)
    })
  }
  toWishList(id: any) {
    this.authService.addWishList(id).subscribe({
      next: (res: any) => {
        this.user = res
      },
      error: (err: any) => console.log(err)
    })
  }

  add1(id: any) {
    if (this.user) {
      let pro = this.user.wishList?.includes(id)
      if (pro == true) {
        return true
      }
      return false
    }
    else {
      return false
    }
  }
  usercart: any[] = []
  userCart() {
    this.cartService.getCart().subscribe({
      next: (res: any) => {
        this.usercart = res.products
      }
    })
  }
  clicked(id: any) {
    // let product = this.usercart[0]?.includes(id)
    // console.log(product)
    // if (product) {
    //   return true
    // }
    // else {
    //   return false
    // }
  }
  submit(data: any) {
    this.cartService.addToCart({ products: [{ product: data.product, count: data.count, color: data.color }] }).subscribe({
      next: (res: any) => {
        this.cart = res
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }
  ngOnInit(): void {
    this.allProduct()
    this.getUser()
    this.userCart()
  }

}
