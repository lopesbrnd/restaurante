import { ItemCardapio } from "./itemcardapio.js";
import { Mesa } from "./Mesa.js";
import { Garcom } from "./Garcom.js";
import { Funcionario } from "./Garcom.js"

export class Restaurante {
    private _mesas: Mesa[];
    private _cardapio: ItemCardapio[];
    private _garcons: Garcom[];
    private _funcionarios: Garcom[];
    private _despesas: number;
    private _receita: number;

              
    constructor(numeroDeMesas: number) {
        this._mesas = Array.from({ length: numeroDeMesas }, (_, i) => new Mesa(i + 1));
        this._cardapio = [];
        this._garcons = [];
        this._despesas = 0;
        this._receita = 0;
    }
    
    get mesas():Mesa[]{
        return this._mesas
    }

    get garcons():Garcom[]{
        return this._garcons
    }
    
    get funcionario():Funcionario[]{
        return this._funcionarios
    }

    get despesas(): number{
        return this._despesas
    }

    get receita(): number{
        return this._receita
    }

    get cardapio(): ItemCardapio[] {
        return this._cardapio;
    }


    adicionarItemCardapio(nome: string, preco: number, descricao:string): void {
        this._cardapio.push(new ItemCardapio(nome, preco, descricao));
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
