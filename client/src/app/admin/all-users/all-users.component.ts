import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/userInterface';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  users: User[] = []
  userInfo: any = ['_id',
    'firstName',
    'lastName',
    'email',
    'address',
    'role',
    'Block', 'delete acount']
  constructor(private adminService: AdminService) { }
  Users() {
    this.adminService.Users().subscribe({
      next: (res: any) => {
        this.users = res
        this.users.reverse()
      },
      error: (err: any) => console.log(err)
    })
  }
  deleteUser(inx: number, _id: any) {
    this.adminService.deleteUser(_id).subscribe({
      next: (res: any) => {
        this.users.splice(inx, 1)
      },
      error: (err: any) => console.log(err)

    })
  }
  Block(inx: number, _id: any) {
    this.adminService.BlockUser(_id).subscribe({
      next: (res: any) => {
        this.users.splice(inx, 1, res.user)
      },
      error: (err: any) => console.log(err)
    })
  }
  ngOnInit(): void {
    this.Users()
  }

}
