import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  constructor(private orderService: OrderService, private router: Router) { }
  addOrder(data: any) {
    this.orderService.addOrder(data).subscribe({
      next: (res: any) => {
        this.router.navigateByUrl('/singleOrder')
        console.log(res)
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }
  ngOnInit(): void {
  }

}
