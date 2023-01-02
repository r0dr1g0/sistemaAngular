import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClassMaterialModule } from './material.module';

//Llamada
import { AppComponent } from './app.component';
import { DashboardModule } from './website/pages/dashboard-layout/dashboard.module';
// COMPONENTES


@NgModule({
  declarations: [
    AppComponent,
    ],
  imports: [
    BrowserModule,
    ClassMaterialModule,
    //Llamada
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DashboardModule,




  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
