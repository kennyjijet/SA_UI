import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FancyTitleComponent } from './fancy-title/fancy-title.component';


const routes: Routes = [
  { path: '', component: FancyTitleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
