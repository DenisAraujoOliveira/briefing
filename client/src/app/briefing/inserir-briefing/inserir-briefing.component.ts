import { Component, EventEmitter, Output,OnInit,ViewChild } from '@angular/core';
import { AtendimentoComponent } from '../../atendimento/atendimento.component';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Form } from '@angular/forms/src/directives/form_interface';
import { ClienteComponent } from '../../clientes/cliente/cliente.component';
import { BriefingService } from '../briefing.service';
// import { BriefingComponent } from '../briefing.component';
import * as moment from 'moment';
import { ClientBrief } from '../../client-brief/client-brief';
import { Campanha } from '../../campanha/campanha';
import { Produto } from '../../produto/produto';
import { ClientBriefService } from '../../client-brief/client-brief.service';
import { Cliente } from '../../clientes/cliente';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-inserir-briefing',
  templateUrl: './inserir-briefing.component.html',
  styleUrls: ['./inserir-briefing.component.css']
})
export class InserirBriefingComponent implements OnInit {
  form: FormGroup;
  agencyBriefService: BriefingService;
  clientBriefService: ClientBriefService;
  clientBrief: ClientBrief;
  campanha: Campanha;
  produto: Produto;
  cliente: Cliente;
  private subscription;  
  
  constructor(agencyBriefService: BriefingService,clientBriefService:ClientBriefService,private fb: FormBuilder){
      this.agencyBriefService = agencyBriefService;
      this.clientBriefService = clientBriefService;
      moment.locale('pt-br');
      // this.clientBrief = new ClientBrief();
  }
  ngOnInit(){
    this.form = this.fb.group({
      agencyBrief_id:[null],
      responsavel: [null, Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(30)])],
      cliente: this.fb.group({
        nome: [Validators.compose([Validators.minLength(5),Validators.maxLength(30)])],
      }),
      clientBrief_id:[null],
      campanha: this.fb.group({
        campanha_id: [null],
        nome_campanha: [null,Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(30)])],
        comeco_campanha:[null,Validators.required],
        final_campanha:[null],
      }),    
      produto: this.fb.group({
        nome: [null],
        cliente_id: [null],
      }),

      objetivo: [null,Validators.compose([Validators.required,Validators.minLength(150)])],
      publico_demografico: [null,Validators.compose([Validators.required,Validators.minLength(20)])],
      publico_perfil: [null,Validators.compose([Validators.required,Validators.minLength(20)])],
      publico_comportamental: [null,Validators.compose([Validators.required,Validators.minLength(20)])],
      insight: [null,Validators.compose([Validators.required,Validators.minLength(150)])],
      mensagem: [null,Validators.compose([Validators.required,Validators.minLength(150)])],
      pilares: [null,Validators.compose([Validators.required,Validators.minLength(150)])],
      entregaveis: [null,Validators.compose([Validators.required,Validators.minLength(150)])], 
      informacoes: [null,Validators.compose([Validators.required,Validators.minLength(50)])],
      mandatorio: [null,Validators.compose([Validators.required,Validators.minLength(150)])],
      hora_cadastrada:['',Validators.required],
      // hora:[''],
      // link:['',Validators.required],
    })
    this.clientBrief = new ClientBrief(null,null,null,null,null,null,null,null,null,null,null,null);
  }
  consultarCBrief(){
    let id = this.form.controls.clientBrief_id.value;
    this.subscription = this.clientBriefService.consultarClientBrief(id).subscribe( resultado => { 
        this.clientBrief = new ClientBrief(
          resultado.client_briefing.clientBrief_id,
          resultado.client_briefing.entregavel,
          resultado.client_briefing.objetivo_vendas,
          resultado.client_briefing.objetivo_visibilidade,
          resultado.client_briefing.objetivo_engajamento,
          resultado.client_briefing.kpi_vendas,
          resultado.client_briefing.kpi_visibilidade,
          resultado.client_briefing.kpi_engajamento,
          resultado.client_briefing.promessa,
          resultado.client_briefing.verba,
          resultado.client_briefing.publico,
          resultado.client_briefing.responsavel
        );
        resultado.client_briefing;
        this.campanha =  new Campanha(
          resultado.campanha.campanha_id,
          resultado.campanha.nome_campanha,
          resultado.campanha.comeco_campanha,
          resultado.campanha.final_campanha,
          resultado.campanha.produto_id,
        );
        this.produto = new Produto(
          resultado.produto.produto_id,
          resultado.produto.nome,
          resultado.produto.cliente_id
        );
        this.cliente =  new Cliente(
          resultado.clientes.id,
          resultado.clientes.url,
          resultado.clientes.nome_cliente
        );
        
    },err => {
      Swal({
        type: 'error',
        title: 'Oops...',
        text: 'Digite um BriefID do cliente válido.',
        // footer: '<a href>Why do I have this issue?</a>',
      })
    });
  }

  trocarBrief(){
    this.campanha = undefined;
    this.clientBrief = new ClientBrief(null,null,null,null,null,null,null,null,null,null,null,null);
    this.produto = undefined;
    this.cliente = undefined;  
  }

  gravar(event){
    event.preventDefault();
    moment.locale('pt-BR');
    this.form.value.hora_cadastrada =  moment().format("YYYY-MM-DD HH:mm:ss");

    let result;
    this.subscription = this.agencyBriefService.cadastra(this.form.value,this.campanha,this.produto,this.cliente).subscribe((resultado) => { 
      result = resultado; 
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
