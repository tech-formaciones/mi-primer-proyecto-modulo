import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { MasterComponent } from './components/master-detail/master.component';
import { DetailComponent } from './components/master-detail/detail.component';
import { DemoComponent } from './components/demo/demo.component';
import { HomeComponent } from './components/home/home.component';

registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [AppComponent, DemoComponent, AboutComponent, PrivacyComponent, MasterComponent, DetailComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, NgbModule],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
