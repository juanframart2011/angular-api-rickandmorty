import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './page/home/home.component';

import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent
	],
	imports: [
		CommonModule,
		BrowserAnimationsModule,
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		BrowserAnimationsModule,
  	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
