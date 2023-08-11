import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) { }
  onSubmit(data: any) {
    this.authService.loginUser(data).subscribe({
      next: (res: any) => {
        localStorage.setItem('token', res.token)
        this.router.navigateByUrl('profile')

      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }
  ngOnInit(): void {
  }

}
