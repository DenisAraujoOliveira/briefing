import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { ClientesComponent } from './clientes.component';
import { ClienteComponent } from './cliente/cliente.component';

@Injectable()
export class ClientesService {
  http: Http;
  url: string = "http://localhost:3001/api/clientes";
  constructor(http: Http) {
    this.http = http;
   }

  getClientes(): Observable<ClienteComponent[]>{
    return this.http.get(this.url).map(res =>{
      return res.json();
    })
  }
}
