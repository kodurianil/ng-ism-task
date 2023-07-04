import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpeningHoursComponent } from './opening-hours/opening-hours.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OpeningHoursDetailsComponent } from './opening-hours-details/opening-hours-details.component';

@NgModule({
  declarations: [
    AppComponent,
    OpeningHoursComponent,
    OpeningHoursDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
