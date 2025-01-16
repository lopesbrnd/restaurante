"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
class Cliente {
    constructor(nome) {
        this._nome = nome;
        this._pontosFidelidade = 0;
    }
    get nome() {
        return this._nome;
    }
    set nome(nome) {
        this._nome = nome;
    }
    get pontosFidelidade() {
        return this._pontosFidelidade;
    }
    adicionarPontos(pontos) {
        this._pontosFidelidade += pontos;
    }
}
exports.Cliente = Cliente;
