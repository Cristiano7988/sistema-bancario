import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    // Atributos
    static numeroDeContas = 0;
    _cliente;
    agencia;
    _saldo = 0;

    // Assessores
    set cliente(novo) {
        if(novo instanceof Cliente) {
            this._cliente = novo;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    // Métodos
    constructor(cliente, agencia) {
        ContaCorrente.numeroDeContas += 1;
        this.cliente = cliente;
        this.agencia = agencia;
    }
    
    sacar(valor) {
        if(this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if(valor <= 0) return; // early return
        this._saldo += valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}