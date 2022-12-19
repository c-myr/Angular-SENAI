import { Component, OnInit } from '@angular/core';
import { Promocoes } from 'src/app/models/promocoes';
import { PromocoesService } from 'src/app/services/promocoes.service';

@Component({
  selector: 'app-promocoes',
  templateUrl: './promocoes.component.html',
  styleUrls: ['./promocoes.component.css']
})
export class PromocoesComponent implements OnInit {

  constructor(private promocoesService: PromocoesService) { }

  listaPromocoes = [] as Promocoes[]

  ngOnInit(): void {
    this.carregarPromocoes()
  }

  carregarPromocoes(){
    this.promocoesService.getPromocoes().subscribe( (promocoesRecebidas: Promocoes[]) => {
      this.listaPromocoes = promocoesRecebidas;
      console.log(this.listaPromocoes);
    })
  }

}