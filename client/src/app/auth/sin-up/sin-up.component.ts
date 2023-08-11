import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/userInterface';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-sin-up',
  templateUrl: './sin-up.component.html',
  styleUrls: ['./sin-up.component.css']
})
export class SinUpComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  users: User = {}
  onSubmit(data: any) {
    this.authService.signUp(data).subscribe({
      next: (res: any) => {
        localStorage.setItem('token', res.token)
        this.router.navigateByUrl('profile')

      },
      error: (err: any) => { console.log(err) }
    })
  }
  ngOnInit(): void {
  }

}
