import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnSubmitComponent } from './btn-submit/btn-submit.component';
import { BtnVoltarComponent } from './btn-voltar/btn-voltar.component';
import { BtnAvancarComponent } from './btn-avancar/btn-avancar.component';
import { VoltarDirective } from './voltar.directive';
import { AvancarDirective } from './avancar.directive';
import { BtnGenericoComponent } from './btn-generico/btn-generico.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AvancarDirective,
    VoltarDirective,
    BtnAvancarComponent,
    BtnVoltarComponent,
    BtnSubmitComponent,
    BtnGenericoComponent
  ],
  exports:[
    AvancarDirective,
    VoltarDirective,
    BtnAvancarComponent,
    BtnVoltarComponent,
    BtnSubmitComponent,
    BtnGenericoComponent
  ],
})
export class BtnsModule { }
