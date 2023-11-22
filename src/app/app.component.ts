import { Component, OnInit } from '@angular/core';
import { AuthLoginService } from './get-drunk/services/auth.login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthLoginService) {}

  ngOnInit() {
    const isLoggedIn = this.authService.hasLoged();

    this.authService.currentUserLoginOn.next(isLoggedIn);
  }
}
