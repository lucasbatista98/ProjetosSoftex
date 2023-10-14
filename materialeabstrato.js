//Objeto Material: Carro
//Atributos:

//marca - a marca do carro.
//modelo - o modelo específico do carro.
//ano - o ano de fabricação do carro.
//Métodos:

//ligar() - inicia o motor do carro.
//desligar() - para o motor do carro.
//acelerar(velocidade) - acelera o carro a uma velocidade específica.
//Exemplo em JavaScript:

class Carro {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.isLigado = false;
    this.velocidade = 0;
  }

  ligar() {
    this.isLigado = true;
    console.log(`O carro ${this.marca} ${this.modelo} foi ligado.`);
  }

  desligar() {
    this.isLigado = false;
    console.log(`O carro ${this.marca} ${this.modelo} foi desligado.`);
  }

  acelerar(velocidade) {
    if (this.isLigado) {
      this.velocidade += velocidade;
      console.log(`O carro ${this.marca} ${this.modelo} acelerou para ${this.velocidade} km/h.`);
    } else {
      console.log(`O carro ${this.marca} ${this.modelo} precisa estar ligado para acelerar.`);
    }
  }
}

const meuCarro = new Carro("Toyota", "Corolla", 2022);
meuCarro.ligar();
meuCarro.acelerar(60);
meuCarro.desligar();

//Objeto Abstrato: Conta Bancária
//Atributos:

//titular - o titular da conta bancária.
//saldo - o saldo atual da conta.
//numeroConta - o número da conta bancária.
//Métodos:

//depositar(valor) - adiciona um valor ao saldo da conta.
//sacar(valor) - retira um valor do saldo da conta, se houver fundos suficientes.
//consultarSaldo() - retorna o saldo atual da conta.
//Exemplo em JavaScript:

class ContaBancaria {
  constructor(titular, numeroConta) {
    this.titular = titular;
    this.numeroConta = numeroConta;
    this.saldo = 0;
  }

  depositar(valor) {
    this.saldo += valor;
    console.log(`Depósito de R$${valor} efetuado. Saldo atual: R$${this.saldo}`);
  }

  sacar(valor) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      console.log(`Saque de R$${valor} efetuado. Saldo atual: R$${this.saldo}`);
    } else {
      console.log(`Saldo insuficiente para sacar R$${valor}. Saldo atual: R$${this.saldo}`);
    }
  }

  consultarSaldo() {
    console.log(`Saldo da conta: R$${this.saldo}`);
  }
}

const minhaConta = new ContaBancaria("João", "12345");
minhaConta.depositar(1000);
minhaConta.sacar(500);
minhaConta.consultarSaldo();
