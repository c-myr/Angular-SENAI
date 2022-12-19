import { Component, OnInit } from '@angular/core';
import * as $ from "jquery"; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  buscarItens () {
    var name = $("buscar").val();
    alert("Busca concluída!");
  }

}
