import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ProfileRoutingModule } from './profile-routing.module';

import { ProfileComponent } from './profile.component';
import { FavoriteTwimpsComponent } from './favorite-twimps/favorite-twimps.component';
import { MyTwimpsComponent } from './my-twimps/my-twimps.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProfileRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ProfileComponent, FavoriteTwimpsComponent, MyTwimpsComponent, EditUserComponent]
})
export class ProfileModule { }
