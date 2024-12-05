import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterComponent } from './components/master-detail/master.component';
import { HomeComponent } from './components/home/home.component';
import { MultipleComponent } from './components/multiple/multiple.component';
import { ImagesComponent } from './components/images-view/images.component';
import { DemoDirectivesComponent } from './components/demo-directives/demo-directives.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'masterdetail', component: MasterComponent },
  { path: 'multiple', component: MultipleComponent },
  { path: 'visor', component: ImagesComponent },
  { path: 'directives', component: DemoDirectivesComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
