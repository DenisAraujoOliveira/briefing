import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BriefingService } from '../../briefing.service';
import * as moment from 'moment';
import { Campanha } from '../../../campanha/campanha';
import { Produto } from '../../../produto/produto';
import { Cliente } from '../../../clientes/cliente';
import { AgencyBrief } from '../../AgencyBrief';
import { RefacaoBriefing } from '../refacao-briefing';
import { RefacaoBriefingService } from '../../refacao-briefing.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-refacao-briefing',
  templateUrl: './inserir-refacao-briefing.component.html',
  styleUrls: ['./inserir-refacao-briefing.component.css']
})
export class InserirRefacaoBriefingComponent implements OnInit {
  form: FormGroup;
  agencyBriefservice: BriefingService;
  reBrief: RefacaoBriefing = new RefacaoBriefing(null,null,null,null,null,null,null,null,null,null,null,null,null);
  agencyBriefCopy: AgencyBrief;
  campanha: Campanha;
  produto: Produto;
  cliente: Cliente;
  private subscription;
  reBriefService: RefacaoBriefingService;


  constructor(agencyBriefservice: BriefingService,private fb: FormBuilder, reBriefService: RefacaoBriefingService) { 
    this.agencyBriefservice = agencyBriefservice;
    this.reBriefService = reBriefService;
    moment.locale('pt-br');
  }

  ngOnInit() {
    this.form = this.fb.group({
      reBrief_id: [''],
      responsavel: ['',Validators.required],
      objetivo: [''],
      publico_demografico: [''],
      publico_perfil: [''],
      publico_comportamental: [''],
      insight: [''],
      mensagem: [''],
      pilares: [''],
      entregaveis: [''],
      informacoes: [''],
      mandatorio: [''],
      hora_cadastrada: [''],
      agencyBrief_id: [''],
      campanha: this.fb.group({
        campanha_id: [''],
      }),    
      produto: this.fb.group({
        cliente_id: [''],
      }),
    })
  }
  consultarAgencyBrief(){
    let id = this.form.controls.agencyBrief_id.value;
    this.subscription = this.agencyBriefservice.consultarAgencyBrief(id).subscribe( resultado => { 
        this.reBrief = new RefacaoBriefing( 
          resultado.agency_briefing.reBrief_id,
          resultado.agency_briefing.responsavel,
          resultado.agency_briefing.entregaveis,
          resultado.agency_briefing.objetivo,
          resultado.agency_briefing.publico_demografico,
          resultado.agency_briefing.publico_perfil,
          resultado.agency_briefing.publico_comportamental,
          resultado.agency_briefing.insight,
          resultado.agency_briefing.mensagem,
          resultado.agency_briefing.pilares,
          resultado.agency_briefing.informacoes,
          resultado.agency_briefing.mandatorio,
          resultado.agency_briefing.agencyBrief_id
        );
        

        this.agencyBriefCopy = resultado.agency_briefing;
        this.campanha = new Campanha(
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

        this.cliente = new Cliente(
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
    this.reBrief = undefined;
    this.agencyBriefCopy = undefined;
    this.produto = undefined;
    this.cliente = undefined 
  }

  gravar(event){
    event.preventDefault();
    moment.locale('pt-BR');
    this.form.value.hora_cadastrada =  moment().format("YYYY-MM-DD HH:mm:ss");
    

    let result;
    this.reBriefService.cadastrar(this.form.value,this.campanha,this.produto,this.cliente).subscribe((resultado) => { 
      result = resultado; 
    } );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
