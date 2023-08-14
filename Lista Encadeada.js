class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.filho = null;
  }
}

class ListaEncadeada {
  constructor() {
    this.head = null;
  }

  adicionarPessoa(nome, idade) {
    const novaPessoa = new Pessoa(nome, idade);

    if (!this.head) {
      this.head = novaPessoa;
    } else {
      let current = this.head;
      while (current.filho) {
        current = current.filho;
      }
      current.filho = novaPessoa;
    }
  }

  exibirPessoas() {
    let current = this.head;
    while (current) {
      console.log(`Nome: ${current.nome}, Idade: ${current.idade}`);
      current = current.filho;
    }
  }
}

// Criando uma lista encadeada de pessoas
const lista = new ListaEncadeada();
lista.adicionarPessoa("Alice", 30);
lista.adicionarPessoa("Bob", 25);
lista.adicionarPessoa("Charlie", 40);

// Exibindo as informações das pessoas na lista
lista.exibirPessoas();
