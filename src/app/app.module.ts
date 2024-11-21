import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PrivacyComponent } from './components/privacy/privacy.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent, PrivacyComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
