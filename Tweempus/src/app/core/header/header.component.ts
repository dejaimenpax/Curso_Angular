import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'tweempus-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  private isLocalStorageAvailable = typeof localStorage !== 'undefined';

  
  constructor(private authService: AuthenticationService) {}

  checkLogin() {
    return this.isLocalStorageAvailable ?
      localStorage.length !== 0
      :
      false;
  }

  logOut() {
    this.authService.logout();
  }

}
