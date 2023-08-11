import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from 'src/app/interfaces/blogInteface';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-update-blog',
  templateUrl: './update-blog.component.html',
  styleUrls: ['./update-blog.component.css']
})
export class UpdateBlogComponent implements OnInit {
  blog: Blog = {}
  constructor(private adminService: AdminService, private router: Router, private route: ActivatedRoute) { }
  id: string = this.route.snapshot.params['id']
  getBlog() {
    this.adminService.AdminGetBlog(this.id).subscribe({
      next: (res: any) => {
        this.blog = res
        console.log(this.blog)
      }
    })
  }
  image: any
  uploadImg(event: any) {
    this.image = event.target.files
  }
  onSubmit(data: any) {
    const Data = new FormData()
    delete data.image
    if (this.image) {
      Data.append('pic', this.image[0])
    }
    Data.append('title', data.title)
    Data.append('descrption', data.descrption)
    Data.append('category', data.category)
    this.adminService.updateBlog(Data, this.id).subscribe({
      next: (res: any) => {
        console.log(res)
        this.router.navigateByUrl('/blogs')
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
