import { Component } from '@angular/core';
import { AuthLoginService } from '../../services/auth.login.service';

@Component({
  selector: 'get-drunk-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  isLoggedIn: boolean = false;

  constructor(private authService: AuthLoginService) {}

  ngOnInit() {
    this.isLoggedIn= this.authService.hasLoged();

  }

}
