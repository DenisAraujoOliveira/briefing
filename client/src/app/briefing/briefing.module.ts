import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BriefingComponent } from './briefing/briefing.component';
import { InserirBriefingComponent } from './inserir-briefing/inserir-briefing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientesModule } from '../clientes/clientes.module';
import { BriefingService } from './briefing.service';

import {DpDatePickerModule} from 'ng2-date-picker';
import { BtnsModule } from '../shared/btns/btns.module';
import { InputTextModule } from '../shared/inputs/input-text/input-text.module';
import { CampanhaModule } from '../campanha/campanha.module';
import { ProdutoModule } from '../produto/produto.module';
import { ClientBriefModule } from '../client-brief/client-brief.module';
import { BtnModalDirective } from '../shared/modal/btn-modal.directive';
import { CardQuestaoModule } from '../shared/card/card-questao.module';
import { InserirRefacaoBriefingComponent } from './refacao-briefing/inserir-refacao-briefing/inserir-refacao-briefing.component';
import { ClientBriefService } from '../client-brief/client-brief.service';
import { ModalDirective } from '../shared/modal/modal.directive';
import { ModalModule } from '../shared/modal/modal.module';
import { RefacaoBriefingService } from './refacao-briefing.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DpDatePickerModule,
    BtnsModule,
    InputTextModule,
    
    ClientesModule,
    CampanhaModule,
    ProdutoModule,
    ClientBriefModule,
    CardQuestaoModule,
    ModalModule

  ],
  declarations: [
    BriefingComponent,
    InserirBriefingComponent,
    InserirRefacaoBriefingComponent,
  ],
  exports:[
    InserirBriefingComponent,
    BriefingComponent
],
  providers:[
    BriefingService,
    ClientBriefService,
    RefacaoBriefingService
  ]
})
export class BriefingModule { }
