import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-single-order',
  templateUrl: './single-order.component.html',
  styleUrls: ['./single-order.component.css']
})
export class SingleOrderComponent implements OnInit {
  orders: any[] = []
  constructor(private orderService: OrderService, private router: Router) { }
  order() {
    this.orderService.getOrder().subscribe({
      next: (res: any) => {
        this.orders = res
        this.orders.reverse()
        console.log(this.orders)
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }
  delete(id: any, inx: number) {
    this.orderService.deleteOrderByUser(id).subscribe({
      next: (res: any) => {
        this.orders.splice(inx, 1)
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }
  deleteAll() {
    this.orderService.deleteAllOrderByUser().subscribe({
      next: (res: any) => {
        this.router.navigateByUrl('')
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }
  existOrder() {
    if (this.orders.length == 0) {
      return false
    }
    else {
      return true
    }
  }
  ngOnInit(): void {
    this.order()
  }

}
