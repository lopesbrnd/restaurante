export class ItemCardapio {
    private _nome: string;
    private _preco: number;
    private _descricao: string;

    constructor(nome: string, preco: number, descricao: string) {
        this._nome = nome;
        this._preco = preco;
        this._descricao = descricao;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(nome: string) {
        this._nome = nome;
    }

    get descricao() :string{
        return this._descricao
    }

    set descricao(descricao:string){
        this._descricao = descricao
    }

    get preco(): number {
        return this._preco;
    }

    set preco(preco: number) {
        this._preco = preco;
    }
}