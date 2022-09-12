import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpendyComponent } from './spendy/spendy/spendy.component';

const routes: Routes = [
  {path: '', component: SpendyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
