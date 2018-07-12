import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-atendimento',
  templateUrl: './atendimento.component.html',
  styleUrls: ['./atendimento.component.css']
})
export class AtendimentoComponent {
  @Input() responsavel: string;

}
