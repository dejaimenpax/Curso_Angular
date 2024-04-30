import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { AuthenticationService } from '../core/authentication.service';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
    CoreModule
  ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
  providers: []
})
export class DashboardModule { }
