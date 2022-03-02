import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { HomeComponent } from './page/home/home.component';

import { MatSliderModule } from '@angular/material/slider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
	BrowserModule,
	AppRoutingModule,
	HttpClientModule,
	BrowserAnimationsModule,
  MatSliderModule,
  MatPaginatorModule,
  MatTableModule,
  MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
