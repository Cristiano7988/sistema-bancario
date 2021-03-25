export class SistemaAutenticacao {
    static login(functionario, senha) {
        return functionario.senha == senha
    }
}