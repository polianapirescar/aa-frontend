import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-cardapio',
  templateUrl: './item-cardapio.component.html',
  styleUrls: ['./item-cardapio.component.scss']
})
export class ItemCardapioComponent {
  @Input() item: any;
}
