import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutsModule } from '../components/layout/layouts.module';
import { InicioComponent } from './inicio/inicio.component';
import { RouterModule } from '@angular/router';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { ContatoComponent } from './contato/contato.component';
import { SharedModule } from '../components/shared/shared.module';

@NgModule({
  declarations: [
    InicioComponent,
    QuemSomosComponent,
    CardapioComponent,
    ContatoComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutsModule,
    RouterModule,
    SharedModule
  ]
})
export class PagesModule { }
