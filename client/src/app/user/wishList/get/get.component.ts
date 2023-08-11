import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {
  wishList: any[] = []
  constructor(private authService: AuthService) { }
  getWishList() {
    this.authService.getWishList().subscribe({
      next: (res: any) => {
        this.wishList = res
        this.wishList.reverse()
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }
  ngOnInit(): void {
    this.getWishList()
  }

}
