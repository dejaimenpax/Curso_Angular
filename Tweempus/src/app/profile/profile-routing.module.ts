import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { FavoriteTwimpsComponent } from './favorite-twimps/favorite-twimps.component';
import { MyTwimpsComponent } from './my-twimps/my-twimps.component';

const profileRoutes: Routes = [
    { 
        path: 'profile', 
        component: ProfileComponent,
        children: [
            {
                path: '',
                redirectTo: 'my-twimps', //se pone por defecto al llamar a profile
                pathMatch: 'prefix'
            },
            {   path: 'my-twimps',
                component: MyTwimpsComponent
            },
            {   path: 'favorite-twimps',
                component: FavoriteTwimpsComponent
            }
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(profileRoutes)
    ]
})
export class ProfileRoutingModule { }
