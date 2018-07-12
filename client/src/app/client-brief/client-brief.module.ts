import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampanhaModule } from '../campanha/campanha.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ClientesModule } from '../clientes/clientes.module';
import { AvancarDirective } from '../shared/btns/avancar.directive';
import { BtnAvancarComponent } from '../shared/btns/btn-avancar/btn-avancar.component';
import { BtnVoltarComponent } from '../shared/btns/btn-voltar/btn-voltar.component';
import { VoltarDirective } from '../shared/btns/voltar.directive';
import { InputTextComponent } from '../shared/inputs/input-text/input-text.component';
import { ProdutoModule } from '../produto/produto.module';
import { CardQuestaoModule } from '../shared/card/card-questao.module';
import { ClientBriefService } from './client-brief.service';
import { BtnSubmitComponent } from '../shared/btns/btn-submit/btn-submit.component';
import { BtnsModule } from '../shared/btns/btns.module';
import { ClientBrief } from './client-brief';
import { InserirClientBriefComponent } from './inserir-client-brief/inserir-client-brief.component';
import { ClientBriefComponent } from './client-brief/client-brief.component';
import { ModalDirective } from '../shared/modal/modal.directive';
import { ModalModule } from '../shared/modal/modal.module';


@NgModule({
  imports: [
    CommonModule,
    ClientesModule,
    ProdutoModule,
    CampanhaModule,
    ReactiveFormsModule,
    FormsModule,
    CardQuestaoModule,
    BtnsModule,
    ModalModule
  ],
  declarations: [
    InserirClientBriefComponent,
    ClientBriefComponent,

  ],
  exports:[
    ClientBriefComponent,
  ],
  providers:[
    ClientBriefService
  ]

})
export class ClientBriefModule { }
