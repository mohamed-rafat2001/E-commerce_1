import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/interfaces/blogInteface';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.css']
})
export class SingleBlogComponent implements OnInit {
  blog: Blog = {}
  constructor(private adminService: AdminService, private route: ActivatedRoute) { }
  id: string = this.route.snapshot.params['id']
  getBlog() {
    this.adminService.getBlog(this.id).subscribe({
      next: (res: any) => {
        this.blog = res
      }
    })
  }
  like(id: any) {
    this.adminService.like(id).subscribe({
      next: (res: any) => {
        this.blog = res
        console.log(res)
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }
  disLike(id: any) {
    this.adminService.disLike(id).subscribe({
      next: (res: any) => {
        this.blog = res
        console.log(res)
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }
  ngOnInit(): void {
    this.getBlog()
  }

}
