import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthenticationService } from '../../core/authentication.service';
import { AuthorService } from '../../shared/author/author.service';
import { Author } from '../../shared/author/author.model';

@Component({
  selector: 'tweempus-edituser',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  editUserForm!: FormGroup;
  userAlreadyExist: boolean = true;
  isSessionStorageAvailable = typeof sessionStorage !== 'undefined';

  currentUser!: any;

  constructor(
    private authService: AuthenticationService,
    private authorService: AuthorService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.editUserForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      image: ['']
    });
    if (this.isSessionStorageAvailable){
      this.authorService.getAuthor(sessionStorage.getItem(sessionStorage.key(0)!)!).subscribe({
        next: response => this.currentUser = response,
        error: () => this.userAlreadyExist = false
      });
    }
  }

  checkLogin() {
    if (this.isSessionStorageAvailable) {
      return this.currentUser.id === sessionStorage.getItem(sessionStorage.key(0)!)!;
    }
    return false;
  }


  editUser(form: any) {
    if (this.userAlreadyExist) {
      this.userAlreadyExist = true;
    } 
    this.authorService.getAuthor(sessionStorage.getItem(sessionStorage.key(0)!)!).subscribe({
      next: () => this.authorService.editAuthor(sessionStorage.getItem(sessionStorage.key(0)!)!, form.value.fullName, form.value.image).subscribe(
        response => this.currentUser = response,
      ),
      error: () => this.userAlreadyExist = false
    });
  }

}