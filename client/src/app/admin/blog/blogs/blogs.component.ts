import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from 'src/app/interfaces/blogInteface';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  blogs: Blog[] = []
  constructor(private adminService: AdminService, private router: Router) { }
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
  deleteBlog(id: any, inx: number) {
    this.adminService.deleteBlog(id).subscribe({
      next: (res: any) => {
        this.blogs.splice(inx, 1)
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }
  deleteAllBlogs() {
    this.adminService.deleteBlogs().subscribe({
      next: (res: any) => {
        this.blogs = res
        this.router.navigateByUrl('/admin/addBlog')
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
  ngOnInit(): void {
    this.allBlogs()
  }

}
