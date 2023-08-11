import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/interfaces/blogInteface';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-single-blog-category',
  templateUrl: './single-blog-category.component.html',
  styleUrls: ['./single-blog-category.component.css']
})
export class SingleBlogCategoryComponent implements OnInit {

  constructor(private adminService: AdminService, private route: ActivatedRoute) { }
  cat: string = this.route.snapshot.params['cat']
  blog: Blog[] = []
  getBlogCats() {
    this.adminService.getBlogCat(this.cat).subscribe({
      next: (res: any) => {
        this.blog = res
        this.blog.reverse()
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }
  like(id: any, inx: number) {
    this.adminService.like(id).subscribe({
      next: (res: any) => {
        this.blog.splice(inx, 1, res)
        console.log(res)
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }
  disLike(id: any, inx: number) {
    this.adminService.disLike(id).subscribe({
      next: (res: any) => {
        this.blog.splice(inx, 1, res)
        console.log(res)
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }
  ngOnInit(): void {
    this.getBlogCats()
  }

}
