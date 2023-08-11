import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-all-brand-cat',
  templateUrl: './all-brand-cat.component.html',
  styleUrls: ['./all-brand-cat.component.css']
})
export class AllBrandCatComponent implements OnInit {

  category: any[] = []
  constructor(private adminService: AdminService) { }
  categories() {
    this.adminService.adminBrandCats().subscribe({
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
    this.adminService.dltBrandCat(id).subscribe({
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
