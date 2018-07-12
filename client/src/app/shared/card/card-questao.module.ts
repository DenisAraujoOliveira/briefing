import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardQuestaoDirective } from './card-questao/card-questao.directive';
import { CardQuestaoComponent } from './card-questao/card-questao.component';
import { CardQuestoesComponent } from './card-questoes/card-questoes.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CardQuestaoComponent,
    CardQuestoesComponent,
    CardQuestaoDirective,
  ],
  exports:[
    CardQuestaoComponent,
    CardQuestoesComponent
  ]
})
export class CardQuestaoModule { }
