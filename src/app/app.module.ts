import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Llamada
import { HttpClientModule } from '@angular/common/http';
// import { ProductosModule } from './productos/productos.module';

@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    BrowserModule,
    //Llamada
    HttpClientModule,
    AppRoutingModule,
    // ProductosModule


  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
