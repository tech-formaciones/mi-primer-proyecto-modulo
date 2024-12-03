import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MasterComponent } from './components/master-detail/master.component';
import { DetailComponent } from './components/master-detail/detail.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent, PrivacyComponent, MasterComponent, DetailComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, NgbModule],
  providers: [],
  bootstrap: [MasterComponent]
})
export class AppModule { }
