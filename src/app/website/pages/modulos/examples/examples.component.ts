import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.css']
})
export class ExamplesComponent implements OnInit {

  ver1:boolean = false;
  ver2:boolean = false;
  // activo:any
  activos:any
  fondo:string = '';
  show:any
  cursos:string[]= ['HTML','PHP','ANGULAR','NODE JS'];

  personas:Array<any> = [
  {
    tipo: 1,
    nombre: 'Lisa',
    edad: 20,
    Otro: 'Otro',

  },
  {
    tipo: 1,
    nombre: 'Lisa',
    edad: 20,
    Otro: 'Otro',

  },
  {
    tipo: 1,
    nombre: 'Lisa',
    edad: 20,
    Otro: 'Otro',

  }
  ]

  constructor() {

   }

  ngOnInit(): void {

  }
}
