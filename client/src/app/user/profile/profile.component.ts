import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/userInterface';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User = {}
  constructor(private authService: AuthService, private router: Router) { }
  profile() {
    this.authService.profile().subscribe({
      next: (res: any) => {
        this.user = res

      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }
  delete() {
    this.authService.delete().subscribe({
      next: (res: any) => {
        this.router.navigateByUrl('')
        localStorage.removeItem('token')
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }
  ngOnInit(): void {
    this.profile()
  }

}
