import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/interfaces/cartInterface';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-single-cart',
  templateUrl: './single-cart.component.html',
  styleUrls: ['./single-cart.component.css']
})
export class SingleCartComponent implements OnInit {

  constructor(private cartService: CartService, private router: Router) { }
  products: any[] = []
  totalPrice: number = 0
  totalProducts: number = 0

  singleCart() {
    this.cartService.getCart().subscribe({
      next: (res: any) => {
        this.products = res.products
        this.totalPrice = res.totalPriceCart
        this.totalProducts = res.totalProduct
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }
  noProduct() {
    if (this.products.length == 0) {
      return true
    }
    else {
      return false
    }
  }
  delete() {
    this.cartService.deleteCart().subscribe({
      next: (res: any) => {
        this.router.navigateByUrl('')
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }
  deleteProduct(id: any, inx: number) {
    this.cartService.dltProFromCart(id).subscribe({
      next: (res: any) => {
        this.totalPrice = res.totalPriceCart
        this.totalProducts = res.totalProduct
        this.products.splice(inx, 1)
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }
  ngOnInit(): void {
    this.singleCart()
  }

}
