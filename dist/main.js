"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Restaurante_1 = require("./Restaurante");
const cliente_1 = require("./cliente");
const Garcom_1 = require("./Garcom");
const Garcom_2 = require("./Garcom");
let restaurante = new Restaurante_1.Restaurante(25);
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
let cliente1 = new cliente_1.Cliente("Micael");
let garcom1 = new Garcom_1.Garcom("Bernardo", 2000);
let garcom2 = new Garcom_1.Garcom("Gabriela", 2000);
let garcom3 = new Garcom_1.Garcom("Marina", 2000);
let funcionario1 = new Garcom_2.Funcionario("Big GIVA", 30000, "Gerente");
let funcionario2 = new Garcom_2.Funcionario("Jonatas", 4000, "Chef");
let funcionario3 = new Garcom_2.Funcionario("Guilherme", 4000, "Chef");
const mesa1 = restaurante.getMesa(1);
mesa1.reservarMesa(cliente1);
mesa1.adicionarPedido(restaurante.cardapio[0]);
mesa1.adicionarPedido(restaurante.cardapio[2]);
const contaFinal = restaurante.processarConta(1, 0.1, 5, garcom1);
console.log(`Conta final: R$${contaFinal}`);
console.log(`Salário total do garçom ${garcom1.nome}: R$${garcom1.calcularSalarioTotal()}`);
console.log(`Pontos de fidelidade de ${cliente1.nome}: ${cliente1.pontosFidelidade}`);
console.log(`Salário total do garçom ${funcionario1.nome}: R$${funcionario1.calcularSalariofuncionario()}`);
