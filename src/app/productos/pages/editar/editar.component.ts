import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  ciudades = ['santa cruz', 'la paz', 'oruro', 'cobija'];
  habitantes = ['3434343', '4565', '576576', '67675'];
  nombre!: string;

  constructor() { }
  ngOnInit(): void {
  }

}
