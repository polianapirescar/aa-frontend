import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainComponent } from '../components/layout/main/main.component';
import { InicioComponent } from './inicio/inicio.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { ContatoComponent } from './contato/contato.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: MainComponent,
        children: [
          {
            path: 'inicio',
            component: InicioComponent,
          },
          {
            path: 'quem-somos',
            component: QuemSomosComponent,
          },
          {
            path: 'cardapio',
            component: CardapioComponent,
          },
          {
            path: 'contato',
            component: ContatoComponent,
          },
        ],
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
