import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { InserirBriefingComponent } from './briefing/inserir-briefing/inserir-briefing.component';
import { InserirClientBriefComponent } from './client-brief/inserir-client-brief/inserir-client-brief.component';
import { InserirRefacaoBriefingComponent } from './briefing/refacao-briefing/inserir-refacao-briefing/inserir-refacao-briefing.component';

const APP_ROUTES: Routes = [
    {
        path: '', component: InserirBriefingComponent
    },
    {
        path: 'client_brief', component: InserirClientBriefComponent,
    },
    {
        path: 'refacao', component: InserirRefacaoBriefingComponent,
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
