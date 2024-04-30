import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { AuthGuard } from '../core/auth-guard';

const dashboardRoutes: Routes = [
    { 
        path: 'dashboard', 
        component: DashboardComponent,
        //redirect to login if user not recognized
        canActivate: [AuthGuard]
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(dashboardRoutes)
    ]
})
export class DashboardRoutingModule { }
