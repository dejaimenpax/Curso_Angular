import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { CreateTwimpModule } from './create-twimp/create-twimp.module';
import { LoginModule } from './login/login.module';
import { ProfileModule } from './profile/profile.module';
import { ErrorModule } from './error/error.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from './core/header-interceptor';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    LoginModule,
    ProfileModule,
    DashboardModule,
    ErrorModule,
    CreateTwimpModule
  ],
  providers: [
    provideClientHydration(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true,
  }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

