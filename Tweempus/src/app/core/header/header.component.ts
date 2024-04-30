import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'tweempus-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  constructor(private authService: AuthenticationService) {}

  checkLogin() {
    return this.authService.token != null;
  }

  logOut() {
    this.authService.logout();
  }

}
