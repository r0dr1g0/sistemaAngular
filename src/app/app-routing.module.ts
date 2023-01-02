import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// COMPONENTES
import { InicioComponent } from './website/pages/inicio/inicio.component';
import { DashboardComponent } from './template/pages/dashboard/dashboard.component';
import { Error_404Component } from './website/pages/blank-page/error-404.component';



const routes: Routes = [
  {
    path:'inicio', component:DashboardComponent,
    children: [
      { path: '', component: InicioComponent},
      { path: '**', component: Error_404Component }
    ]
  },

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },

  {
    path: 'antes',
    loadChildren: () => import('src/app/productos/productos.module').then(m => m.ProductosModule)
  },

  {
    path: '',
    loadChildren: () => import('src/app/website/pages/modulos/modulos.module').then(m => m.ModulosModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
