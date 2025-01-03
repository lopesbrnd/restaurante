export class Cliente {
    private _nome: string;
    private _pontosFidelidade: number;

    constructor(nome: string) {
        this._nome = nome;
        this._pontosFidelidade = 0;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(nome: string) {
        this._nome = nome;
    }

    get pontosFidelidade(): number {
        return this._pontosFidelidade;
    }

    adicionarPontos(pontos: number): void {
        this._pontosFidelidade += pontos;
    }
}
