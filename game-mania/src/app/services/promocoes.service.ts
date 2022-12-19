import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Promocoes } from '../models/promocoes';

@Injectable({
  providedIn: 'root'
})
export class PromocoesService {

    url = "http://localhost:3000/promocoes"

  constructor(private httpClient: HttpClient) { }

  getPromocoes():Observable<Promocoes[]>{
    return this.httpClient.get<Promocoes[]>(this.url)
  }
}