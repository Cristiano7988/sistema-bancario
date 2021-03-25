export class Cliente {
    // Assessores
    get cpf() {
        return this._cpf;
    }

    // Métodos
    constructor(nome, cpf, senha) {
        this.nome = nome;
        this._cpf = cpf;
        this._senha = senha;
    }

    autenticar() {
        return true;
    }
}