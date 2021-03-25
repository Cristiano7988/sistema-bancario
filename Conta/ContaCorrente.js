import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    // Atributos
    static numeroDeContas = 0;

    // Métodos
    constructor(cliente, agencia) {
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas += 1;
    }

    // sobreescreve o comportamento da classe mãe
    sacar(valor) {
        let taxa = 1.1;
        return this._sacar(valor, taxa); // retorna método herdado da classe superior
    }
}