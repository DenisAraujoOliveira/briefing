import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroClientes'
})
export class ClientesPipe implements PipeTransform {

  transform(clientes,digitado){
    return clientes.filter(cliente=> cliente.nome_cliente.toLocaleLowerCase().includes(digitado.toLocaleLowerCase()))
  }

}
