import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, Router, RouterModule } from '@angular/router';
import { LazyLoadedComponentTwo } from './lazy-loaded-component-two.component';

export const routes: Routes = [
  {path: '', component: LazyLoadedComponentTwo}
];

@NgModule({
  declarations: [LazyLoadedComponentTwo],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class LazyLoadedComponentTwoModule { }
