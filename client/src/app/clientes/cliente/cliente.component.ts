import {Component, Input } from '@angular/core';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent  {
  @Input() cliente: Cliente;


  constructor() { }
  
  
    objEmpty(){
      return Object.keys(this.cliente).length>0;
    }
  
  
    ngOnInit() {
    }
  

}
