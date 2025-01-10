export class Garcom {
    private _nome: string;
    private _salario: number;
    private _gorjetasRecebidas: number;

    constructor(nome: string, salario: number) {
        this._nome = nome;
        this._salario = salario;
        this._gorjetasRecebidas = 0;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(nome: string) {
        this._nome = nome;
    }

    get salario(): number {
        return this._salario;
    }

    set salario(salario: number) {
        this._salario = salario;
    }

    get gorjetasRecebidas(): number {
        return this._gorjetasRecebidas;
    }

    adicionarGorjeta(valor: number): void {
        this._gorjetasRecebidas += valor;
    }

    calcularSalarioTotal(): number {
        return this._salario + this._gorjetasRecebidas;
    }
}
export class Funcionario extends Garcom {
    private _funcao: string;

    constructor(nome: string, salario: number, funcao: string) {
        super(nome, salario);
        this._funcao = funcao;
    }

    get funcao(): string {
        return this._funcao;
    }

    set funcao(funcao: string) {
        this._funcao = funcao;
    }

    calcularSalariofuncionario(): number{
        return this.salario
    }
}