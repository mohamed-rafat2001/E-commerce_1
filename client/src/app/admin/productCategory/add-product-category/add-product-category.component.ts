import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-add-product-category',
  templateUrl: './add-product-category.component.html',
  styleUrls: ['./add-product-category.component.css']
})
export class AddProductCategoryComponent implements OnInit {

  constructor(private adminService: AdminService, private router: Router) { }
  onSubmit(body: any) {
    this.adminService.addCategory(body).subscribe({
      next: (res: any) => {
        this.router.navigateByUrl('/admin/allProCats')
      }
    })
  }
  ngOnInit(): void {
  }

}
