// Modulos generales [imports]
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ColorPickerModule } from 'ngx-color-picker';


// Modulo con la configuración de las rutas [imports]
import { AppRoutingModule } from './app-routing.module';


// Necesario para trabajar con fechas con una configuración reginal es-es
// Es necesario incluir en providers { provide: LOCALE_ID, useValue: 'es' }
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs, 'es');


// Componentes [declarations]
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { DemoComponent } from './components/demo/demo.component';
import { AboutComponent } from './components/about/about.component';
import { PrivacyComponent } from './components/privacy/privacy.component';

import { MasterComponent } from './components/master-detail/master.component';
import { DetailComponent } from './components/master-detail/detail.component';

import { MultipleComponent } from './components/multiple/multiple.component';
import { ListComponent } from './components/multiple/list.component';
import { FormComponent } from './components/multiple/form.component';
import { SignatureComponent } from './components/multiple/signature.component';
import { ColorpickerComponent } from './components/multiple/colorpicker.component';

import { ImagesComponent } from './components/images-view/images.component';
import { ViewerComponent } from './components/images-view/viewer.component';
import { ImagesinfoComponent } from './components/images-view/imagesinfo.component';


@NgModule({
  declarations: [AppComponent, 
    DemoComponent, AboutComponent, PrivacyComponent, 
    HomeComponent,
    MasterComponent, DetailComponent, 
    MultipleComponent, ListComponent, FormComponent, SignatureComponent, ColorpickerComponent,
    ImagesComponent, ViewerComponent, ImagesinfoComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, NgbModule, ColorPickerModule],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
