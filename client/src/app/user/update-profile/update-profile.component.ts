import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/userInterface';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  user: User = {}
  constructor(private authService: AuthService, private router: Router) { }
  getUser() {
    this.authService.profile().subscribe({
      next: (res: any) => this.user = res,
      error: (err: any) => console.log(err)
    })

  }
  onSubmit(data: any) {
    this.authService.updateProfile(data).subscribe({
      next: (res: any) => this.router.navigateByUrl('profile'),
      error: (err: any) => console.log(err)
    })
  }
  ngOnInit(): void {
    this.getUser()
  }

}
