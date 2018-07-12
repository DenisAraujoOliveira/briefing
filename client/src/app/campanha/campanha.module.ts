import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampanhaComponent } from './campanha.component';
import { InserirCampanhaComponent } from './inserir-campanha/inserir-campanha.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientesModule } from '../clientes/clientes.module';
import { DpDatePickerModule } from 'ng2-date-picker';

@NgModule({
  imports: [
    CommonModule,
    ClientesModule,
    FormsModule,
    ReactiveFormsModule,
    DpDatePickerModule
    
  ],
  declarations: [
    CampanhaComponent, 
    InserirCampanhaComponent,
  ],
  exports:[InserirCampanhaComponent,CampanhaComponent]
})
export class CampanhaModule { }
