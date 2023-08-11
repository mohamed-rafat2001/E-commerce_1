import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

  constructor(private adminService: AdminService, private router: Router) { }
  image: any
  uploadImg(event: any) {
    this.image = event.target.files
  }
  onSubmit(data: any) {
    const Data = new FormData()
    Data.append('pic', this.image[0])
    Data.append('title', data.title)
    Data.append('descrption', data.descrption)
    Data.append('category', data.category)
    this.adminService.addBlog(Data).subscribe({
      next: (res: any) => {
        this.router.navigateByUrl('/blogs')
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }
  ngOnInit(): void {
  }

}
