import { Component, OnInit,Input } from '@angular/core';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { CampanhaComponent } from '../campanha.component';
import * as moment from 'moment';
import { Form } from '@angular/forms/src/directives/form_interface';

@Component({
  selector: 'app-inserir-campanha',
  templateUrl: './inserir-campanha.component.html',
  styleUrls: ['./inserir-campanha.component.css']
})
export class InserirCampanhaComponent  {
  constructor() { 
  }

  @Input() campanha: any;

  // CONFIGURACOES DATA INICIO
  config = {
    format:"DD/MM/YYYY", 
    min: this.minHour(), 
    disableKeypress:true,
    dayBtnCssClassCallback: (m => {
      let dia = moment(m).day();
      if ( dia == 0 || dia == 6) {
        return 'invalid-day';
      } else {
        return 'valid-day';
      }
    }),
    isDayDisabledCallback: (m => {
      let teste = moment(m).day();
      let okMin = moment(m).isBefore(moment())
      if ( teste == 0 || teste == 6 || okMin)
        return "disabled"
    }),
    
  }

  minHour(){
    let diaHora = moment();
    if(diaHora.hours() < 16)
      return diaHora;
    else
      return diaHora.add(1, 'day');
  }

  // CONFIG 2 DATA FINAL
  config2;

  dataEntrega(){
    if(/\d{2}\/\d{2}\/\d{4}/.test(this.campanha.value.comeco_campanha)){
      let dataMax = this.campanha.value.comeco_campanha;
      dataMax = dataMax.replace('/','-').replace('/','-').split('-')
      this.config2 = {
        format:"DD/MM/YYYY", 
        disableKeypress:true,
        isDayDisabledCallback: (m => {
          let teste = moment(m).day();
          let okMin = moment(m).isBefore(moment(dataMax[2]+"-"+dataMax[1]+"-"+dataMax[0]));
          if ( teste == 0 || teste == 6 || okMin)
            return "disabled"
        }),
        showGoToCurrent: true,
      }
      return true;
    }
  }


}
