import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/interfaces/blogInteface';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-all-blog',
  templateUrl: './all-blog.component.html',
  styleUrls: ['./all-blog.component.css']
})
export class AllBlogComponent implements OnInit {
  blogs: Blog[] = []
  singleBlog: Blog = {}
  constructor(private adminService: AdminService) { }
  allBlogs() {
    this.adminService.getBlogs().subscribe({
      next: (res: any) => {
        this.blogs = res
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }
  noBlogs() {
    if (this.blogs.length == 0) return true
    else return false
  }
  like(id: any, inx: number) {
    this.adminService.like(id).subscribe({
      next: (res: any) => {
        this.blogs.splice(inx, 1, res)
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
        this.blogs.splice(inx, 1, res)
        console.log(res)
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }
  ngOnInit(): void {
    this.allBlogs()
  }

}
