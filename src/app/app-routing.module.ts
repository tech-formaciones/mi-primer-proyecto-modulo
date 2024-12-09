import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterComponent } from './components/master-detail/master.component';
import { HomeComponent } from './components/home/home.component';
import { MultipleComponent } from './components/multiple/multiple.component';
import { ImagesComponent } from './components/images-view/images.component';
import { DemoDirectivesComponent } from './components/demo-directives/demo-directives.component';
import { FormTemplateComponent } from './components/form-template/form-template.component';
import { FormReactiveComponent } from './components/form-reactive/form-reactive.component';
import { CustomerListComponent } from './components/customer/customer-list.component';
import { CustomerDetailComponent } from './components/customer/customer-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'masterdetail', component: MasterComponent },
  { path: 'multiple', component: MultipleComponent },
  { path: 'visor', component: ImagesComponent },
  { path: 'directives', component: DemoDirectivesComponent },
  { path: 'formtemplate', component: FormTemplateComponent },
  { path: 'formreactive', component: FormReactiveComponent },
  { path: 'customers', component: CustomerListComponent },
  { path: 'customers/:id', component: CustomerDetailComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
