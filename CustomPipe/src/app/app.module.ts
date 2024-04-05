import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumberListComponent } from './number-list/number-list.component';
import { NumberPrefixPipe } from './number-prefix.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NumberListComponent,
    NumberPrefixPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
