import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCardapioComponent } from './item-cardapio/item-cardapio.component';
import { AvaliacoesCafeComponent } from './avaliacoes-cafe/avaliacoes-cafe.component';



@NgModule({
  declarations: [
    ItemCardapioComponent,
    AvaliacoesCafeComponent
  ],
  exports: [
    ItemCardapioComponent,
    AvaliacoesCafeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
