import { ItemCardapio } from "./itemcardapio";
import { Mesa } from "./Mesa";
import { Garcom } from "./Garcom";

export class Restaurante {
    private _mesas: Mesa[];
    private _cardapio: ItemCardapio[];
    private _garcons: Garcom[];
    private _despesas: number;
    private _receita: number;
    private _feedbacks: string[];

    constructor(numeroDeMesas: number) {
        this._mesas = Array.from({ length: numeroDeMesas }, (_, i) => new Mesa(i + 1));
        this._cardapio = [];
        this._garcons = [];
        this._despesas = 0;
        this._receita = 0;
        this._feedbacks = [];
    }

    get cardapio(): ItemCardapio[] {
        return this._cardapio;
    }

    get feedbacks(): string[] {
        return this._feedbacks;
    }

    get receita(): number {
        return this._receita;
    }

    get despesas(): number {
        return this._despesas;
    }

    adicionarItemCardapio(nome: string, preco: number): void {
        this._cardapio.push(new ItemCardapio(nome, preco));
    }

    adicionarGarcom(nome: string, salario: number): void {
        this._garcons.push(new Garcom(nome, salario));
    }

    getMesa(id: number): Mesa {
        const mesa = this._mesas.find(mesa => mesa.id === id);
        if (!mesa) {
            throw new Error(`Mesa ${id} não existe.`);
        }
        return mesa;
    }

    processarConta(idMesa: number, taxaServico: number, gorjeta: number, garcom: Garcom): number {
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

    adicionarFeedback(feedback: string): void {
        this._feedbacks.push(feedback);
    }
}