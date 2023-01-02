import { Component } from '@angular/core';
// Importar y tambien clase persona
import { PersonasService } from './personas.service';
import {Persona} from "./persona";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'sistemaR';
    // Inyectar servicio en constructor
    constructor(private personasService: PersonasService) {}

    // Función que hace la petición
    // probarGet() {
    //   this.personasService
    //   .obtener()
    //   .subscribe((personas?: Persona[]) => {
    //     console.log(personas);
    //   });
    // }
}
