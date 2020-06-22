import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  message: string;
  constructor(public authService: AuthService, public router: Router) {
    this.setMessage();
  }
  login() {
    this.authService.logIn();
    this.setMessage();
    this.authService.isAuthenticated().then((isAuthenticated) => {
      if (isAuthenticated) {
        const redirectUrl = this.authService.redirectUrl
          ? this.router.parseUrl(this.authService.redirectUrl)
          : '/admin';
        this.router.navigateByUrl(redirectUrl);
      }
    });
  }
  logout() {
    this.authService.logOut();
    this.setMessage();
  }

  setMessage() {
    this.message = 'logged ';
    this.authService.isAuthenticated().then((isAuthenticated: boolean) => {
      if (isAuthenticated) {
        this.message += ' in';
      } else {
        this.message += ' out';
      }
    });
  }
  ngOnInit(): void {}
}
