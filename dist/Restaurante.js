"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Restaurante = void 0;
const itemcardapio_js_1 = require("./itemcardapio.js");
const Mesa_js_1 = require("./Mesa.js");
const Garcom_js_1 = require("./Garcom.js");
const Garcom_js_2 = require("./Garcom.js");
class Restaurante {
    constructor(numeroDeMesas) {
        this._mesas = Array.from({ length: numeroDeMesas }, (_, i) => new Mesa_js_1.Mesa(i + 1));
        this._cardapio = [];
        this._garcons = [];
        this._despesas = 0;
        this._receita = 0;
    }
    get mesas() {
        return this._mesas;
    }
    get garcons() {
        return this._garcons;
    }
    get funcionario() {
        return this._funcionarios;
    }
    get despesas() {
        return this._despesas;
    }
    get receita() {
        return this._receita;
    }
    get cardapio() {
        return this._cardapio;
    }
    adicionarItemCardapio(nome, preco, descricao) {
        this._cardapio.push(new itemcardapio_js_1.ItemCardapio(nome, preco, descricao));
    }
    adicionarGarcom(nome, salario) {
        this._garcons.push(new Garcom_js_1.Garcom(nome, salario));
    }
    adicionarFuncionario(nome, salario, funcao) {
        this._funcionarios.push(new Garcom_js_2.Funcionario(nome, salario, funcao));
    }
    getMesa(id) {
        const mesa = this._mesas.find(mesa => mesa.id === id);
        if (!mesa) {
            throw new Error(`Mesa ${id} não existe.`);
        }
        return mesa;
    }
    processarConta(idMesa, taxaServico, gorjeta, garcom) {
        const mesa = this.getMesa(idMesa);
        const total = mesa.calcularTotal();
        const taxaServicoValor = total * taxaServico;
        const valorFinal = total + taxaServicoValor + gorjeta;
        this._receita += total + taxaServicoValor;
        garcom.adicionarGorjeta(gorjeta);
        const cliente = mesa.cliente;
        if (cliente) {
            cliente.adicionarPontos(Math.floor(total / 10));
        }
        mesa.liberarMesa();
        return valorFinal;
    }
    calcularDespesasGarcons() {
        const despesasSalariosGarcons = this._garcons.reduce((total, garcom) => total + garcom.salario, 0);
        this._despesas = despesasSalariosGarcons;
        return despesasSalariosGarcons;
    }
    calcularDespesasFuncionarios() {
        const despesasSalariosFuncionarios = this._funcionarios.reduce((total, funcionario) => total + funcionario.salario, 0);
        this._despesas = despesasSalariosFuncionarios;
        return despesasSalariosFuncionarios;
    }
    calcularDespesasTotais() {
        return this.calcularDespesasFuncionarios() + this.calcularDespesasGarcons();
    }
}
exports.Restaurante = Restaurante;
