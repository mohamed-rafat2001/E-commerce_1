import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-add-brand-category',
  templateUrl: './add-brand-category.component.html',
  styleUrls: ['./add-brand-category.component.css']
})
export class AddBrandCategoryComponent implements OnInit {

  constructor(private adminService: AdminService, private router: Router) { }
  onSubmit(body: any) {
    this.adminService.addBrandCat(body).subscribe({
      next: (res: any) => {
        this.router.navigateByUrl('/admin/allBrandCat')
      }
    })
  }
  ngOnInit(): void {
  }

}
