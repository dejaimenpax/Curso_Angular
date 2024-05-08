import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthenticationService } from '../../core/authentication.service';
import { AuthorService } from '../../shared/author/author.service';
import { Author } from '../../shared/author/author.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'tweempus-edituser',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  editUserForm!: FormGroup;
  userAlreadyExist: boolean = true;

  idAuthor: string | null = null;
  author: Author | null = null;

  constructor(
    private authService: AuthenticationService,
    private authorService: AuthorService,
    private route: ActivatedRoute,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.editUserForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      image: ['']
    });

    this.idAuthor = this.route.parent!.snapshot.params['id'];
    console.log("El id de las rutas que saca es ", this.idAuthor)
    this.authorService.getAuthor(this.authService.token!.idAuthor).subscribe(author => this.author = author);
    
  }

  checkLogin() {
    if (this.authService.token != null) {
      if (this.idAuthor == this.authService.token.idAuthor)
        return true;
    }
    return false;
  }


  editUser(form: any) {
    if (this.userAlreadyExist) {
      this.userAlreadyExist = true;
    } 
    this.authorService.getAuthor(this.author!.id).subscribe({
      next: () => this.authorService.editAuthor(this.authService.token!.idAuthor, form.value.fullName, form.value.image).subscribe(
        response => this.author = response,
      ),
      error: () => this.userAlreadyExist = false
    });
  }

}