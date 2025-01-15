import { Restaurante } from "./restaurante";
import { Cliente } from "./cliente";
import { Garcom } from "./garcom";
import {Funcionario} from "./garcom"

let restaurante = new Restaurante(25);
restaurante.adicionarItemCardapio("Pizza", 20, 'super pizza');
restaurante.adicionarItemCardapio("Pizza", 20, 'super pizza');
restaurante.adicionarItemCardapio("Pizza", 20, 'super pizza');
restaurante.adicionarItemCardapio("Pizza", 20, 'super pizza');
restaurante.adicionarItemCardapio("Pizza", 20, 'super pizza');
restaurante.adicionarItemCardapio("Pizza", 20, 'super pizza');
restaurante.adicionarItemCardapio("Pizza", 20, 'super pizza');
restaurante.adicionarItemCardapio("Pizza", 20, 'super pizza');
restaurante.adicionarItemCardapio("Pizza", 20, 'super pizza');
restaurante.adicionarItemCardapio("Pizza", 20, 'super pizza');
restaurante.adicionarItemCardapio("Pizza", 20, 'super pizza');


let cliente1 = new Cliente("Micael");
let garcom1 = new Garcom("Bernardo", 2000);
let garcom2 = new Garcom("Gabriela", 2000);
let garcom3 = new Garcom("Marina", 2000); 
let funcionario1 = new Funcionario("Big GIVA",30000,"gerente")
let funcionario2 = new Funcionario("Jonatas",4000,"Chef")
let funcionario3 = new Funcionario("Guilherme",4000,"Chef")

const mesa1 = restaurante.getMesa(1);
mesa1.reservarMesa(cliente1);
mesa1.adicionarPedido(restaurante.cardapio[0]);
mesa1.adicionarPedido(restaurante.cardapio[2]);

const contaFinal = restaurante.processarConta(1, 0.1, 5, garcom1);
console.log(`Conta final: R$${contaFinal}`);
console.log(`Salário total do garçom ${garcom1.nome}: R$${garcom1.calcularSalarioTotal()}`);
console.log(`Pontos de fidelidade de ${cliente1.nome}: ${cliente1.pontosFidelidade}`);
console.log(`Salário total do garçom ${funcionario1.nome}: R$${funcionario1.calcularSalariofuncionario()}`)