import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { TwimpService } from '../shared/twimp/twimp.service';
import { AuthenticationService } from '../core/authentication.service';

import { Twimp } from '../shared/twimp/twimp.model';
import { Author } from '../shared/author/author.model';
import { AuthorService } from '../shared/author/author.service';

@Component({
  selector: 'tweempus-create-twimp',
  templateUrl: './create-twimp.component.html',
  styleUrls: ['./create-twimp.component.css']
})
export class CreateTwimpComponent implements OnInit {
  newTwimpForm!: FormGroup;

  constructor(
    private authService: AuthenticationService,
    private authorService: AuthorService,
    private twimpService: TwimpService,
    private router: Router,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.newTwimpForm = this.fb.group({
      content: ['', [Validators.required, Validators.maxLength(140)]],
    });
  }

  createTwimp(form: any) {
    this.twimpService.getTwimps().subscribe(response => {
      let twimpDate: string = new Date().toLocaleDateString().replace(/\//g, '-');
      let author!: Author;
      let twimp!: Twimp;

      this.authorService.getAuthor(this.authService.token!.idAuthor).subscribe(
        res => {
          author = new Author(res['id'], res['fullName']);
          twimp =  new Twimp(this.authService.generateToken(), '', author, form.value.content, twimpDate);
          this.twimpService.setTwimp(twimp).subscribe(
            () => this.router.navigate(['/dashboard'])
          )
        }
      )
    });
  }
}
