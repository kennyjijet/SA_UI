import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FancyTitleComponent } from './fancy-title/fancy-title.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LOPAComponent } from './lopa/lopa.component';

@NgModule({
  declarations: [
    AppComponent,
    FancyTitleComponent,
    DashboardComponent,
    LOPAComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
