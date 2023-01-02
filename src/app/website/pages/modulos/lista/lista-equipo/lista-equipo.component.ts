import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service } from 'src/app/services/service.service';

@Component({
  selector: 'app-lista-equipo',
  templateUrl: './lista-equipo.component.html',
  styleUrls: ['./lista-equipo.component.css']
})
export class ListaEquipoComponent implements OnInit {
    public lista:any=[];

  constructor(
    private _ruta: ActivatedRoute,
    private _service: Service)
    {
      this._ruta.params.subscribe(
        respuesta => {this.lista = this._service.obtenerUno(respuesta['identificador']);
        // console.log(respuesta)
        // console.log(respuesta['identificador'])
      })
    }

  ngOnInit(): void {
  }

}
