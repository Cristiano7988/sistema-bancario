import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

// Instancia cliente e conta
const cliente1 = new Cliente("Nome", 1111111111);
const conta1 = new ContaCorrente(cliente1, 1111);

const cliente2 = new Cliente("Nome2", 222222222);
const conta2 = new ContaCorrente(cliente2, 2222);

// Executa transações
conta1.depositar(1000);
conta1.sacar(800);
conta1.transferir(77, conta2);

// Exibe os dados dos clientes
console.log(conta1, conta2);

// Exibe o total de contas criadas
console.log(ContaCorrente.numeroDeContas);