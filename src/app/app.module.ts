import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Llamada
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ProductosModule } from './productos/productos.module';
import { ClassMaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    BrowserModule,
    ClassMaterialModule,
    //Llamada
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // ProductosModule



  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
