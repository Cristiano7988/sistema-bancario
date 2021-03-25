// Classe Abstrata
export class Conta {
    constructor(saldo, cliente, agencia) {
        if(this.constructor == Conta) {
            throw new Error("Você não deveria instanciar um objeto do tipo Conta diretamente, classes abstratas só podem ser herdadas");
        }
        this._saldo = saldo;
        this._cliente = cliente;
        this._agencia = agencia;
    }

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

    // Método Abstrato
    sacar(valor) {
        throw new Error("Método abstrato deve ser sobrescrito");
    }

    // Método Privado
    _sacar(valor, taxa) {
        const valorSacado = taxa * valor
        if(this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
    }

    // Métodos Públicos
    depositar(valor) {
        if(valor <= 0) return; // early return
        this._saldo += valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}