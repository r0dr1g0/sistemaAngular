import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulosRoutingModule } from './modulos-routing.module';

// SERVICIOS
import { Service } from 'src/app/services/service.service';

// COMPONENTES
import { ExamplesComponent } from './examples/examples.component';
import { ListaComponent } from './lista/lista.component';
import { ListaEquipoComponent } from './lista/lista-equipo/lista-equipo.component';




@NgModule({
  declarations: [
    ExamplesComponent,
    ListaComponent,
    ListaEquipoComponent,
  ],
  imports: [
    CommonModule,
    ModulosRoutingModule,
  ],
  providers:[
    Service,
  ]
})
export class ModulosModule { }
