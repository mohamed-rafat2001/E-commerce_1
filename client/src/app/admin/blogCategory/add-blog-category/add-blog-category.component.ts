import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-add-blog-category',
  templateUrl: './add-blog-category.component.html',
  styleUrls: ['./add-blog-category.component.css']
})
export class AddBlogCategoryComponent implements OnInit {

  constructor(private adminService: AdminService, private router: Router) { }
  onSubmit(body: any) {
    this.adminService.addBlogCat(body).subscribe({
      next: (res: any) => {
        this.router.navigateByUrl('/admin/allBlogCat')
      }
    })
  }

  ngOnInit(): void {
  }

}
