import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WidgetTemplateComponent } from './widget-template/widget-template.component';

// https://www.npmjs.com/package/angular2-draggable
import { AngularDraggableModule } from 'angular2-draggable';


@NgModule({
  declarations: [
    AppComponent,
    WidgetTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularDraggableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
