import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InserirProdutoComponent } from './inserir-produto/inserir-produto.component';
import { ProdutoComponent } from './produto.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [InserirProdutoComponent, ProdutoComponent],
  exports: [ProdutoComponent,InserirProdutoComponent],
})
export class ProdutoModule { }
