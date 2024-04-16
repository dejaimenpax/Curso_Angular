import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorComponent } from './error.component';

const errorRoutes: Routes = [
    { 
        path: 'error', 
        component: ErrorComponent
    },
    {
        path: '**',
        redirectTo: '/error',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(errorRoutes)
    ]
})
export class ErrorRoutingModule { }
