import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
  path: 'auth',
  loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
},

{
  path: 'antes',
  loadChildren: () => import('src/app/productos/productos.module').then(m => m.ProductosModule)
},

{
  path: '**', redirectTo: '',
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
