import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/userInterface';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-all-admins',
  templateUrl: './all-admins.component.html',
  styleUrls: ['./all-admins.component.css']
})
export class AllAdminsComponent implements OnInit {
  admins: User[] = []
  userInfo: any = ['_id',
    'firstName',
    'lastName',
    'email',
    'address',
    'role',
    'Block',]
  constructor(private adminService: AdminService) { }
  Admin() {
    this.adminService.Admins().subscribe({
      next: (res: any) => {
        this.admins = res
        this.admins.reverse()
      },
      error: (err: any) => console.log(err)
    })
  }
  ngOnInit(): void {
    this.Admin()
  }

}
