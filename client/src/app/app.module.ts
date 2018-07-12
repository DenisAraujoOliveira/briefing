import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'rxjs/add/operator/map';

import { AppComponent } from './app.component';
import { ClientesModule } from './clientes/clientes.module';
import { HttpModule } from '@angular/http';
import { BriefingModule } from './briefing/briefing.module';
import { InserirAtendimentoComponent } from './atendimento/inserir-atendimento/inserir-atendimento.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { CampanhaModule } from './campanha/campanha.module';
import { ClientBriefModule } from './client-brief/client-brief.module';

@NgModule({
  declarations: [
    AppComponent
    
  ],

  imports: [
    BrowserModule,
    HttpModule,
    ClientBriefModule,
    BriefingModule,
    routing
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
