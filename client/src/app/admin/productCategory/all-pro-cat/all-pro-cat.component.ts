import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-all-pro-cat',
  templateUrl: './all-pro-cat.component.html',
  styleUrls: ['./all-pro-cat.component.css']
})
export class AllProCatComponent implements OnInit {

  category: any[] = []
  constructor(private adminService: AdminService) { }
  categories() {
    this.adminService.categoriesByAdmin().subscribe({
      next: (res: any) => {
        this.category = res
        console.log(this.categories)
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }
  delete(id: any, inx: number) {
    this.adminService.deleteProductCat(id).subscribe({
      next: (res: any) => {
        this.category.splice(inx, 1)

      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }
  ngOnInit(): void {
    this.categories()
  }

}
