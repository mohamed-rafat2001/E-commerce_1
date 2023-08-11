import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private Route: ActivatedRoute) { }
  onSubmit(data: any) {
    this.authService.resetPass(data).subscribe({
      next: (res: any) => {
        localStorage.setItem('token', res.token)
        console.log(res)
        this.router.navigateByUrl('')
      },
      error: (err: any) => {
        console.log(err)
      }
    })

  }
  ngOnInit(): void {
  }

}
