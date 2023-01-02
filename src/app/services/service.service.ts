import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service {
//  public i:string = '';
  equipo:any[]=
  [
    {
      nombre: 'Rodrigo',
      especialidad: 'ANGULAR, LARAVEL',
      descripcion: 'avanzado avanzado avanzado avanzadoavanzadoavanzado avanzadoavanzado',
    },
    {
      nombre: 'Alvaro',
      especialidad: 'HTML, VUE',
      descripcion: 'avanzado avanzado avanzado avanzadoavanzadoavanzado avanzadoavanzado',
    },
    {
      nombre: 'Lara',
      especialidad: 'SNIPPETS, PHP',
      descripcion: 'avanzado avanzado avanzado avanzadoavanzadoavanzado avanzadoavanzado',
    }
]

  constructor() {
    console.log('mensaje de servicio')
   }

   obtenerEquipo(){
    return this.equipo
   }

  obtenerUno(i: any){
  return this.equipo[i]
  }

}
