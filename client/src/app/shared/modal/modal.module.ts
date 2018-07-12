import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalDirective } from './modal.directive';
import { BtnModalDirective } from './btn-modal.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ModalDirective,
    BtnModalDirective
  ],
  exports:[
    ModalDirective,
    BtnModalDirective
  ]
})
export class ModalModule { }
