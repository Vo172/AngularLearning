import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DayOneComponent } from './day-one/day-one.component';
import { DayTwoComponent } from './day-two/day-two.component';
import { DayThreeComponent } from './day-three/day-three.component';
import { DayFourComponent } from './day-four/day-four.component';


@NgModule({
  declarations: [
    AppComponent,
    DayOneComponent,
    DayTwoComponent,
    DayThreeComponent,
    DayFourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
