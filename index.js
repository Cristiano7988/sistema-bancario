import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupança.js";
import { ContaSalario } from "./Conta/ContaSalario.js";

// Instancia cliente e conta
const cliente1 = new Cliente("Nome", 1111111111);
const contaCorrente1 = new ContaCorrente(cliente1, 1111);
const contaPoupanca1 = new ContaPoupanca(50, cliente1, 1111);
const contaSalario1 = new ContaSalario(cliente1);

const cliente2 = new Cliente("Nome2", 222222222);
const contaCorrente2 = new ContaCorrente(cliente2, 2222);
const contaPoupanca2 = new ContaPoupanca(150, cliente2, 1111);
const contaSalario2 = new ContaSalario(cliente2);

// Executa transações
contaCorrente1.depositar(1000);
contaCorrente1.sacar(800);
contaCorrente1.transferir(77, contaCorrente2);

// Exibe os dados dos clientes
console.log(contaCorrente1, contaCorrente2);
console.log(contaSalario1, contaPoupanca1);

// Exibe o total de contas criadas
console.log(ContaCorrente.numeroDeContas);