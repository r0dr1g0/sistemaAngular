import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modulos
import { ProductosRoutingModule } from './productos-routing.module';

// Componentes
import { AgregarComponent } from './pages/agregar/agregar.component';
import { EditarComponent } from './pages/editar/editar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { CharizardComponent } from './pages/charizard/charizard.component';


@NgModule({
  declarations: [
    AgregarComponent,
    EditarComponent,
    ListadoComponent,
    ProductoComponent,
    CharizardComponent,
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
