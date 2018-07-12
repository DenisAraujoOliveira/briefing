import { Component, OnInit,Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AfterViewChecked,ChangeDetectorRef } from '@angular/core';
import { Validators } from '@angular/forms';
import * as moment from 'moment';
import swal from 'sweetalert2';
import { ClientBriefService } from '../client-brief.service';
import {Router} from '@angular/router';
// const swal = require('sweetalert2');


@Component({
  selector: 'app-inserir-client-brief',
  templateUrl: './inserir-client-brief.component.html',
  styleUrls: ['./inserir-client-brief.component.css']
})
export class InserirClientBriefComponent implements OnInit {

  form: FormGroup;
  service: ClientBriefService;
  cliente: any;
  campanha: FormGroup;
  produto: FormGroup;
  responsavel: FormGroup;


  constructor(private fb: FormBuilder,private cd: ChangeDetectorRef,service:ClientBriefService, private router: Router) {
    this.service = service;
    this.form = this.fb.group({
      clientBrief_id:[''],
      responsavel: ['', Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(30)])],
      entregavel: ['',Validators.compose([Validators.required,Validators.minLength(100)])],
      objetivo_vendas: ['',Validators.compose([Validators.required,Validators.minLength(100)])],
      objetivo_visibilidade: ['',Validators.compose([Validators.required,Validators.minLength(100)])],
      objetivo_engajamento: ['',Validators.compose([Validators.required,Validators.minLength(100)])],
      
      kpi_vendas: ['',Validators.compose([Validators.required,Validators.minLength(100)])],
      kpi_visibilidade: ['',Validators.compose([Validators.required,Validators.minLength(100)])],
      kpi_engajamento: ['',Validators.compose([Validators.required,Validators.minLength(100)])],
      promessa: ['',Validators.compose([Validators.required,Validators.minLength(100)])],

      publico: ['',Validators.compose([Validators.required,Validators.minLength(100)])],
      verba: ['',Validators.compose([Validators.required,Validators.minLength(2)])],
      campanha_id:[''],
      hora_cadastrada:[''],

      cliente: this.fb.group({
        nome_cliente: ['']
      }),
      campanha: this.fb.group({
        campanha_id: [''],
        nome_campanha: ['',Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(30)])],
        comeco_campanha:['',Validators.required],
        final_campanha:[''],
        produto_id: [''],
      }),
      produto: this.fb.group({
        produto_id: [''],
        nome: ['',Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(30)])],
        cliente_id: [''],
      })

    })
   }
  ngAfterViewChecked(){
    this.cd.detectChanges();
  }

  ngOnInit() {
    
  }
  setIdCliente(event){
    this.form.get('produto.cliente_id').setValue(event.cliente.cliente_id);
  }

  gravar(event){
    event.preventDefault();
    swal({
      title: 'As informações estão certas?',
      text: "Se o seu briefing estiver ok, confirme!",
      type: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        moment.locale('pt-BR');
        this.form.value.hora_cadastrada =  moment().format("YYYY-MM-DD HH:mm:ss");
  
        let result;
        this.service.cadastra(this.form.value).subscribe((resultado) => { 
          result = resultado; 
        });
        swal(
          'Salvo!',
          'Pronto! Seja feliz com o seu lindo briefing :)',
          'success'
        )
        this.form.reset();
        this.router.navigate(['']);

      }
    })  
    


  }


}
