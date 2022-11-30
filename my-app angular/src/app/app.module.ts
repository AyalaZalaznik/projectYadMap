import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AllScreenComponent } from './all-screen/all-screen.component';
import { LeftScreenComponent } from './left-screen/left-screen.component';
import { RighteScreenComponent } from './righte-screen/righte-screen.component';
import { Tab1Component } from './tab1/tab1.component';
import { Tab2Component } from './tab2/tab2.component';
import { Tab3Component } from './tab3/tab3.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    AllScreenComponent,
    LeftScreenComponent,
    RighteScreenComponent,
    Tab1Component,
    Tab2Component,
    Tab3Component,
    MapComponent,

  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
