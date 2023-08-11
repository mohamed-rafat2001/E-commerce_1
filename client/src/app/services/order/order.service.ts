import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }
  url: string = 'http://localhost:4000/'
  // creat order
  addOrder(body: any) {
    return this.http.post(this.url + "order", '')
  }
  // get order
  getOrder() {
    return this.http.get(this.url + "order")
  }
  // delete order by user
  deleteOrderByUser(id: any) {
    return this.http.delete(this.url + "order/" + id)
  }
  // delete All Order By User
  deleteAllOrderByUser() {
    return this.http.delete(this.url + "orders/user")
  }
}
