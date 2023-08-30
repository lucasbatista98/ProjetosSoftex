var Banco = {
  conta: "123456",
  saldo: 1000,
  tipoConta: "Conta Corrente",
  agencia: "7890",

  buscarSaldo: function () {
    return this.saldo;
  },

  deposito: function (valor) {
    if (valor > 0) {
      this.saldo += valor;
      return "Depósito de R$" + valor + " realizado com sucesso. Novo saldo: R$" + this.saldo;
    } else {
      return "Valor inválido para depósito.";
    }
  },

  saque: function (valor) {
    if (valor > 0 && valor <= this.saldo) {
      this.saldo -= valor;
      return "Saque de R$" + valor + " realizado com sucesso. Novo saldo: R$" + this.saldo;
    } else {
      return "Saldo insuficiente ou valor inválido para saque.";
    }
  },

  numeroDaConta: function () {
    return this.conta;
  },
};

// Exemplos de uso:

console.log("Saldo atual: R$" + Banco.buscarSaldo());
console.log(Banco.deposito(500));
console.log(Banco.saque(200));
console.log("Número da conta: " + Banco.numeroDaConta());
