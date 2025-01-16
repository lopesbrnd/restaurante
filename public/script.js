import { ItemCardapio } from '../dist/itemcardapio.js';

let item1 = new ItemCardapio('X-Braga', 13, 'Pão, Hambúrguer Smash, Cheddar e Molho da casa')
let item2 = new ItemCardapio('Duplo Braga', 20, 'Pão, 2 Hambúrguer Smash, Cheddar e Molho da casa')
let item3 = new ItemCardapio('Clássico Bacurau', 15, 'Pão, Hambúrguer de Crane de Sol, Queijo de Coalho, Cebola Roxa e Molho da casa')
let item4 = new ItemCardapio('Garcia Burguer', 16, 'Pão, Hambúrguer de Frango, Queijo sem lactose e Molho da casa')
let item5 = new ItemCardapio('Felix Vegetariano', 17, 'Pão, Hambúrguer de Soja assado na brasa, Alface, Tomate, Cebola e Molho da casa')
let item6 = new ItemCardapio('Batata Arante', 10, 'Batatas Fritas com tempero do chefe (acompanha Molho da casa)')
let item7 = new ItemCardapio('Batata Arante com Cheddar e Bacon', 15, 'Batatas Fritas com tempero do chefe, Cheddar e Bacon (acompanha Molho da casa)')
let item8 = new ItemCardapio('Anéis de Farias', 12, 'Anéis de Cebola fritos (acompanha molho)')
let item9 = new ItemCardapio('Giva Shake de Morango', 16, 'Milk Shake de morango com calda de morango batido na hora')
let item10 = new ItemCardapio('Giva Shake de Ninho com Nutella', 18, 'Milk Shake de Ninho com cobertura de Nutella batido na hora')
let item11 = new ItemCardapio('Petit Gateau a La França', 22, 'Petit Gateau de chocolate com soverte de creme e calda de chocolate')
let item12 = new ItemCardapio('Refrigerante 2L', 15, 'Coca-Cola, Cajuína, Guaraná, Sprite')
let item13 = new ItemCardapio('Refrigerante 1L', 10, 'Coca-Cola, Cajuína, Guaraná, Pepsi')
let item14 = new ItemCardapio('Refrigerante Latinha', 6, 'Coca-Cola, Guaraná, Sprite')
let item15 = new ItemCardapio('Suco (Copo)', 7, 'Limão, Morango, Maracujá e Laranja')
let item16 = new ItemCardapio('Suco (Jarra)', 15, 'Limão, Morango, Maracujá e Laranja')

let ItemCardapio=[item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12, item13, item14, item15, item16]

function percorrerCardapio(lista) {
    lista.forEach((item, indice) => {
      console.log(`Item ${indice + 1}: ${item}`);
    });
  }

  percorrerCardapio(ItemCardapio);
