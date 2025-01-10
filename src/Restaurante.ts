import { ItemCardapio } from "./itemcardapio";
import { Mesa } from "./mesa";
import { Cliente } from "./cliente";
import { Garcom } from "./garcom";
import { Funcionario } from "./garcom"

export class Restaurante {
    private _mesas: Mesa[];
    private _cardapio: ItemCardapio[];
    private _garcons: Garcom[];
    private _funcionarios: Funcionario[]
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
    
    get despesas(): number{
        return this._despesas
    }

    get cardapio(): ItemCardapio[] {
        return this._cardapio;
    }

    get feedbacks(): string[] {
        return this._feedbacks;
    }
    
    set feedbacks(feedback: string) {
        if (!feedback.trim()) {
            throw new Error("O feedback não pode ser vazio.");
        }
        this._feedbacks.push(feedback);
    }
    

    adicionarItemCardapio(nome: string, preco: number): void {
        this._cardapio.push(new ItemCardapio(nome, preco));
    }

    adicionarGarcom(nome: string, salario: number): void {
        this._garcons.push(new Garcom(nome, salario));
    }
    adicionarFuncionario(nome: string, salario: number, funcao: string): void {
        this._funcionarios.push(new Funcionario(nome, salario, funcao));
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

    calcularDespesasGarcons(): number {
        const despesasSalariosGarcons = this._garcons.reduce((total, garcom) => total + garcom.salario, 0);
        this._despesas = despesasSalariosGarcons; 
        return despesasSalariosGarcons;
    }

    calcularDespesasFuncionarios(): number {
        const despesasSalariosFuncionarios = this._funcionarios.reduce((total,funcionario) => total + funcionario.salario, 0);
        this._despesas = despesasSalariosFuncionarios; 
        return despesasSalariosFuncionarios;
    }

    calcularDespesasTotais(): number {
        return this.calcularDespesasFuncionarios() + this.calcularDespesasGarcons()
    }

}
