import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentOne } from './lazy-loaded-component-one/lazy-loaded-component-one.component';
import { LazyLoadedComponentTwo } from './lazy-loaded-component-two/lazy-loaded-component-two.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentOne
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
