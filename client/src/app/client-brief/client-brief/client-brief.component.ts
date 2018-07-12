import { Component, OnInit, Input } from '@angular/core';
import { ClientesComponent } from '../../clientes/clientes.component';
import { Campanha } from '../../campanha/campanha';

@Component({
  selector: 'client-brief',
  templateUrl: './client-brief.component.html',
  styleUrls: ['./client-brief.component.css']
})
export class ClientBriefComponent implements OnInit {

  @Input() clienteBrief: ClientesComponent;
  @Input() campanha: Campanha;

  constructor() {
  }

  ngOnInit() {
    
  }

}
