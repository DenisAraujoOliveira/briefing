import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './clientes.component';
import { ClientesService } from './clientes.service';
import { ClienteComponent } from './cliente/cliente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientesPipe } from './clientes.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule

  ],
  declarations: [
    ClientesComponent,
    ClienteComponent,
    ClientesPipe
  ],
  exports: [
    ClientesComponent,
    ClienteComponent
  ],
  providers:[ClientesService]
})
export class ClientesModule { }
