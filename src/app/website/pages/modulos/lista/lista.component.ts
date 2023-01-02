import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/services/service.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  public equipos:any=[];
  // equipos:any[]=[]  // Cuando sea array
  constructor(
    private _service: Service) {
      this.equipos = _service.obtenerEquipo();
    }

  ngOnInit(): void {
  }

}
