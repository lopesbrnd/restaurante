"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemCardapio = void 0;
class ItemCardapio {
    constructor(nome, preco, descricao) {
        this._nome = nome;
        this._preco = preco;
        this._descricao = descricao;
    }
    get nome() {
        return this._nome;
    }
    set nome(nome) {
        this._nome = nome;
    }
    get descricao() {
        return this._descricao;
    }
    set descricao(descricao) {
        this._descricao = descricao;
    }
    get preco() {
        return this._preco;
    }
    set preco(preco) {
        this._preco = preco;
    }
}
exports.ItemCardapio = ItemCardapio;
