import { Component } from '@angular/core';
import { Avaliacao } from 'src/app/model/avaliacao';

@Component({
  selector: 'app-avaliacoes-cafe',
  templateUrl: './avaliacoes-cafe.component.html',
  styleUrls: ['./avaliacoes-cafe.component.scss']
})
export class AvaliacoesCafeComponent {
  avaliacoes: Avaliacao[] = [
    { estrelas: 4, comentario: 'Ótimo café e ambiente agradável!', nome: 'João Silva', data: '10/04/2023' },
    { estrelas: 3, comentario: 'Café razoável, mas atendimento pode melhorar.', nome: 'Maria Santos', data: '05/04/2023' },
    { estrelas: 2, comentario: 'Não gostei do café, muito fraco.', nome: 'Ana Lima', data: '02/04/2023' }
  ];
}
