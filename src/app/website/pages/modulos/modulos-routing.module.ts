import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../../../template/pages/dashboard/dashboard.component';
import { Error_404Component } from '../blank-page/error-404.component';
import { ExamplesComponent } from './examples/examples.component'; // agregado
import { ListaEquipoComponent } from './lista/lista-equipo/lista-equipo.component';
import { ListaComponent } from './lista/lista.component';
import { NosotrosComponent } from './nosotros/nosotros.component';

const routes: Routes = [
  // {path: '', component: DashboardComponent},
  {
    path: '', component: DashboardComponent,
    children: [
      { path: 'examples', component: ExamplesComponent, },
      { path: 'servicios', component: ListaComponent},
      { path: 'lista-equipo/:identificador', component: ListaEquipoComponent},
      { path: 'nosotros', component: NosotrosComponent},
      { path: '**', component: Error_404Component}
      // {path: '**', redirectTo: ''},
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulosRoutingModule { }
