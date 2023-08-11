import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/userInterface';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  user: User = {}
  constructor(private authService: AuthService, private router: Router) { }
  onSubmit(data: any) {
    this.authService.forgotPass(data).subscribe({
      next: (res: any) => {
        this.user = res
        this.router.navigateByUrl('resetPassword')
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }
  ngOnInit(): void {
  }

}
