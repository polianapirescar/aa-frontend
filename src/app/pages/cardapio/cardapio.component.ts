import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/produto';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.scss']
})
export class CardapioComponent implements OnInit {

  products: Produto[] = [
    {
      nome: "Café expresso",
      valor: 4.50,
      descricao: "Um clássico café expresso, com sabor forte e aroma intenso."
    },
    {
      nome: "Cappuccino",
      valor: 6.00,
      descricao: "Café expresso com leite vaporizado e espuma cremosa, polvilhado com canela."
    },
    {
      nome: "Latte Macchiato",
      valor: 7.00,
      descricao: "Leite vaporizado com um toque suave de café expresso, servido em camadas para um visual elegante."
    },
    {
      nome: "Mocha",
      valor: 8.50,
      descricao: "Café expresso com leite vaporizado e chocolate derretido, coberto com chantilly."
    },
    {
      nome: "Chá verde",
      valor: 5.00,
      descricao: "Chá verde japonês de alta qualidade, com um sabor delicado e refrescante."
    },
    {
      nome: "Bolo de cenoura",
      valor: 6.00,
      descricao: "Bolo de cenoura úmido e macio, coberto com cream cheese e nozes."
    },
    {
      nome: "Croissant",
      valor: 4.00,
      descricao: "Croissant crocante e amanteigado, perfeito para acompanhar um café expresso."
    },
    {
      nome: "Sanduíche de presunto e queijo",
      valor: 9.00,
      descricao: "Pão de forma fresco com presunto defumado, queijo derretido, alface e tomate."
    },
    {
      nome: "Café coado",
      valor: 5.00,
      descricao: "Café coado na hora, feito com grãos de alta qualidade e água filtrada."
    },
    {
      nome: "Café com leite",
      valor: 5.50,
      descricao: "Café expresso com leite vaporizado, servido em uma xícara grande."
    },
    {
      nome: "Muffin de blueberry",
      valor: 4.50,
      descricao: "Muffin macio e saboroso, com pedaços de blueberry frescos."
    },
    {
      nome: "Pão de queijo",
      valor: 3.50,
      descricao: "Pão de queijo crocante por fora e macio por dentro, feito com queijo de qualidade."
    },
    {
      nome: "Suco natural de laranja",
      valor: 6.00,
      descricao: "Suco de laranja recém espremido, sem conservantes ou açúcares adicionados."
    },
    {
      nome: "Café gelado",
      valor: 7.50,
      descricao: "Café expresso com gelo, servido com leite e xarope de caramelo."
    },
    {
      nome: "Bolo de chocolate",
      valor: 6.50,
      descricao: "Bolo de chocolate molhadinho e saboroso, com cobertura de ganache."
    },
    {
      nome: "Sanduíche vegetariano",
      valor: 8.50,
      descricao: "Pão integral com legumes grelhados, queijo fresco e molho pesto."
    }
  ];


  ngOnInit(): void {
    
  }

}
