import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TemplateModule } from 'src/app/template/pages/template.module';
// COMPONENTES
import { InicioComponent } from '../inicio/inicio.component';
import { DashboardLayoutComponent } from './dashboard-layout.component';



@NgModule({
  declarations: [
    InicioComponent,
    DashboardLayoutComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    TemplateModule,

  ]
})
export class DashboardModule { }
