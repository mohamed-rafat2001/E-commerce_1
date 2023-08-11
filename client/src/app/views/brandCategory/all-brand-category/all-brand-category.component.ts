import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-all-brand-category',
  templateUrl: './all-brand-category.component.html',
  styleUrls: ['./all-brand-category.component.css']
})
export class AllBrandCategoryComponent implements OnInit {

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
