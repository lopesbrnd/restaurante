import { ItemCardapio } from "./itemcardapio";
import { Cliente } from "./cliente";

export class Mesa {
    private _id: number;
    private _disponivel: boolean;
    private _pedidos: ItemCardapio[];
    private _cliente?: Cliente;

    constructor(id: number) {
        this._id = id;
        this._disponivel = true;
        this._pedidos = [];
    }

    get id(): number {
        return this._id;
    }

    get disponivel(): boolean {
        return this._disponivel;
    }

    set disponivel(disponivel: boolean) {
        this._disponivel = disponivel;
    }

    get pedidos(): ItemCardapio[] {
        return this._pedidos;
    }

    get cliente(): Cliente | undefined {
        return this._cliente;
    }

    reservarMesa(cliente: Cliente): void {
        if (this._disponivel) {
            this._disponivel = false;
            this._cliente = cliente;
        } else {
            throw new Error(`Mesa ${this._id} já está reservada.`);
        }
    }

    liberarMesa(): void {
        this._disponivel = true;
        this._pedidos = [];
        this._cliente = undefined;
    }

    adicionarPedido(item: ItemCardapio): void {
        this._pedidos.push(item);
    }

    calcularTotal(): number {
        return this._pedidos.reduce((total, item) => total + item.preco, 0);
    }
}
