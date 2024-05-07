import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'tweempus-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  private isSessionStorageAvailable = typeof sessionStorage !== 'undefined';

  
  constructor(private authService: AuthenticationService) {}

  checkLogin() {
    return this.isSessionStorageAvailable ?
      sessionStorage.length !== 0
      :
      false;
  }

  logOut() {
    this.authService.logout();
  }

}
