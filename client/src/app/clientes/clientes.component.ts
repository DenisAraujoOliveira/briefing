import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { ClientesService } from './clientes.service';
import { ClienteComponent } from './cliente/cliente.component';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
  @Input() cliente: ClienteComponent;
  clientes: ClienteComponent[]=[];

  @Output() selecionouCliente = new EventEmitter;
  
  constructor(service: ClientesService) {
    service.getClientes().subscribe(clientes=>{
      this.clientes = clientes;
    });
  }

  seleciona(cliente){
    this.selecionouCliente.emit({cliente: cliente});
  }

  
}
