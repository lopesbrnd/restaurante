import { Restaurante } from "./Restaurante";
import { Cliente } from "./cliente";
import { Garcom } from "./Garcom";

const restaurante = new Restaurante(10);
restaurante.adicionarItemCardapio("Pizza", 20);
restaurante.adicionarItemCardapio("Massa", 15);
restaurante.adicionarItemCardapio("Refrigerante", 5);

const cliente1 = new Cliente("João");
const garcom1 = new Garcom("Carlos", 2000);

restaurante.adicionarGarcom(garcom1.nome, garcom1.salario);

const mesa1 = restaurante.getMesa(1);
mesa1.reservarMesa(cliente1);
mesa1.adicionarPedido(restaurante.cardapio[0]);
mesa1.adicionarPedido(restaurante.cardapio[2]);

const contaFinal = restaurante.processarConta(1, 0.1, 5, garcom1);
console.log(`Conta final: R$${contaFinal}`);
console.log(`Salário total do garçom ${garcom1.nome}: R$${garcom1.calcularSalarioTotal()}`);
console.log(`Pontos de fidelidade de ${cliente1.nome}: ${cliente1.pontosFidelidade}`);