import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import {   }

// Modulos de todas las rutas de auth
import { AuthRountingModule } from './auth-rounting.module';

 // Componentes
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgotComponent } from './pages/forgot/forgot.component';



@NgModule({
  declarations: [
    RegistroComponent,
    LoginComponent,
    ForgotComponent,

  ],

  imports: [
    CommonModule,
    AuthRountingModule,
  ]
})
export class AuthModule { }
