import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-inserir-produto',
  templateUrl: './inserir-produto.component.html',
  styleUrls: ['./inserir-produto.component.css']
})
export class InserirProdutoComponent implements OnInit {

  @Input() produto: any;

  constructor() { }

  ngOnInit() {
  }

}
