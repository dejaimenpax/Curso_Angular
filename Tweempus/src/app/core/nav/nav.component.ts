import { Component } from '@angular/core';

import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'tweempus-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  private isSessionStorageAvailable = typeof sessionStorage !== 'undefined';

  idAuthor: string | null = null;

  constructor(private authService: AuthenticationService) { }

  checkLogin = () => {
    if (this.isSessionStorageAvailable) {
      this.idAuthor = sessionStorage.getItem(sessionStorage.key(0)!);
      return true;
    }
    this.idAuthor = null;
    return false;
  }
}
