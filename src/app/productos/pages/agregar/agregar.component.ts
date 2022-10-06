import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  url = 'https://th.bing.com/th/id/OIP.rwA7lBXctHePz9fbgWCcGQHaHa?pid=ImgDet&rs=1';

  constructor() { }

  ngOnInit(): void {
  }

}
