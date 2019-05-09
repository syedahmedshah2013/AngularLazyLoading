import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentOne } from './lazy-loaded-component-one/lazy-loaded-component-one.component';
import { LazyLoadedComponentTwo } from './lazy-loaded-component-two/lazy-loaded-component-two.component';

const routes: Routes = [
  {path: '', component: ComponentOne},
  {path: 'two', loadChildren: './lazy-loaded-component-two/lazy-loaded-component-two.module#LazyLoadedComponentTwoModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
