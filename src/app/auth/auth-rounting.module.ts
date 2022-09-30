import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotComponent } from './pages/forgot/forgot.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
// import { CommonModule } from '@angular/common';
const routes: Routes =
[
  {
    path: '',
    children: [
      {path: 'forgot', component: ForgotComponent},
      {path: 'login', component: LoginComponent},
      {path: 'registro', component: RegistroComponent},
      {path: '**', redirectTo: ''}, // Si no encuentra pagina, redireccionara a ese componente que pongamos, puede ser componente error 404
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    // CommonModule
    RouterModule.forChild(routes)
  ]
})
export class AuthRountingModule { }
