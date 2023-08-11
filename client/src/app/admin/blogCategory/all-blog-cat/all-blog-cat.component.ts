import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-all-blog-cat',
  templateUrl: './all-blog-cat.component.html',
  styleUrls: ['./all-blog-cat.component.css']
})
export class AllBlogCatComponent implements OnInit {

  category: any[] = []
  constructor(private adminService: AdminService) { }
  categories() {
    this.adminService.adminBlogCats().subscribe({
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
    this.adminService.dltBlogCat(id).subscribe({
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
