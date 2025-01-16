"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mesa = void 0;
class Mesa {
    constructor(id) {
        this._id = id;
        this._disponivel = true;
        this._pedidos = [];
    }
    get id() {
        return this._id;
    }
    get disponivel() {
        return this._disponivel;
    }
    set disponivel(disponivel) {
        this._disponivel = disponivel;
    }
    get pedidos() {
        return this._pedidos;
    }
    get cliente() {
        return this._cliente;
    }
    reservarMesa(cliente) {
        if (this._disponivel) {
            this._disponivel = false;
            this._cliente = cliente;
        }
        else {
            throw new Error(`Mesa ${this._id} já está reservada.`);
        }
    }
    liberarMesa() {
        this._disponivel = true;
        this._pedidos = [];
        this._cliente = undefined;
    }
    adicionarPedido(item) {
        this._pedidos.push(item);
    }
    calcularTotal() {
        return this._pedidos.reduce((total, item) => total + item.preco, 0);
    }
}
exports.Mesa = Mesa;
