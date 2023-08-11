import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }
  url: string = "http://localhost:4000/"
  //add product to cart
  addToCart(body: any) {
    return this.http.post(this.url + "cart/", body)
  }
  // get cart
  getCart() {
    return this.http.get(this.url + "cart")
  }
  //delete all cart
  deleteCart() {
    return this.http.delete(this.url + "cart")
  }
  //delete product from cart
  dltProFromCart(id: any) {
    return this.http.delete(this.url + "cart/product/" + id)
  }
}

