import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FancyTitleComponent } from './fancy-title/fancy-title.component';
import { LOPAComponent } from './lopa/lopa.component';


const routes: Routes = [
  { path: '', component: LOPAComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
