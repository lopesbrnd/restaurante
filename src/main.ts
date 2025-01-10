import { Restaurante } from "./restaurante";
import { Cliente } from "./cliente";
import { Garcom } from "./garcom";
import {Funcionario} from "./garcom"

let restaurante = new Restaurante(10);
restaurante.adicionarItemCardapio("Pizza", 20);
restaurante.adicionarItemCardapio("Massa", 15);
restaurante.adicionarItemCardapio("Refrigerante", 5);

let cliente1 = new Cliente("João");
let garcom1 = new Garcom("Carlos", 2000); 
let funcionario1 = new Funcionario("Wagner",1700,"faxineiro")

const mesa1 = restaurante.getMesa(1);
mesa1.reservarMesa(cliente1);
mesa1.adicionarPedido(restaurante.cardapio[0]);
mesa1.adicionarPedido(restaurante.cardapio[2]);

const contaFinal = restaurante.processarConta(1, 0.1, 5, garcom1);
console.log(`Conta final: R$${contaFinal}`);
console.log(`Salário total do garçom ${garcom1.nome}: R$${garcom1.calcularSalarioTotal()}`);
console.log(`Pontos de fidelidade de ${cliente1.nome}: ${cliente1.pontosFidelidade}`);
console.log(`Salário total do garçom ${funcionario1.nome}: R$${funcionario1.calcularSalariofuncionario()}`)