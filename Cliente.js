export class Cliente {
    // Atributos
    nome;
    _cpf;

    // Assessores
    get cpf() {
        return this._cpf;
    }

    // Métodos
    constructor(nome, cpf) {
        this.nome = nome;
        this._cpf = cpf;
    }
}