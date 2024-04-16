import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorRoutingModule } from './error-routing.module';
import { ErrorComponent } from './error.component';
import { DashboardModule } from '../dashboard/dashboard.module';



@NgModule({
  declarations: [ErrorComponent],
  imports: [
    CommonModule,
    ErrorRoutingModule,
    DashboardModule
  ],
  exports: [ErrorComponent]
})
export class ErrorModule { }
