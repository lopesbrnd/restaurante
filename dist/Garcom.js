"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = exports.Garcom = void 0;
class Garcom {
    constructor(nome, salario) {
        this._nome = nome;
        this._salario = salario;
        this._gorjetasRecebidas = 0;
    }
    get nome() {
        return this._nome;
    }
    set nome(nome) {
        this._nome = nome;
    }
    get salario() {
        return this._salario;
    }
    set salario(salario) {
        this._salario = salario;
    }
    get gorjetasRecebidas() {
        return this._gorjetasRecebidas;
    }
    adicionarGorjeta(valor) {
        this._gorjetasRecebidas += valor;
    }
    calcularSalarioTotal() {
        return this._salario + this._gorjetasRecebidas;
    }
}
exports.Garcom = Garcom;
class Funcionario extends Garcom {
    constructor(nome, salario, funcao) {
        super(nome, salario);
        this._funcao = funcao;
    }
    get funcao() {
        return this._funcao;
    }
    set funcao(funcao) {
        this._funcao = funcao;
    }
    calcularSalariofuncionario() {
        return this.salario;
    }
}
exports.Funcionario = Funcionario;
