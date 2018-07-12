import { Component, OnInit,Input } from '@angular/core';
import { Campanha } from './campanha';

@Component({
  selector: 'app-campanha',
  templateUrl: './campanha.component.html',
  styleUrls: ['./campanha.component.css']
})
export class CampanhaComponent implements OnInit {

  @Input() campanha: Campanha;

  constructor() { }

  objEmpty(){
    return Object.keys(this.campanha).length>1;
  }

  ngOnInit() {
  }

}
