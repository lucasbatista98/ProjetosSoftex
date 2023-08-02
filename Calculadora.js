function calculadora() {
  while (true) {
    console.log("Escolha uma operação:");
    console.log("1: Soma");
    console.log("2: Subtração");
    console.log("3: Multiplicação");
    console.log("4: Divisão");
    console.log("0: Sair");

    const opcao = parseInt(prompt("Digite o número da operação desejada:"));

    switch (opcao) {
      case 0:
        console.log("Saindo da calculadora.");
        return;
      case 1:
      case 2:
      case 3:
      case 4:
        const num1 = parseFloat(prompt("Digite o primeiro número:"));
        const num2 = parseFloat(prompt("Digite o segundo número:"));
        let resultado = 0;

        switch (opcao) {
          case 1:
            resultado = num1 + num2;
            console.log(`Resultado: ${resultado}`);
            break;
          case 2:
            resultado = num1 - num2;
            console.log(`Resultado: ${resultado}`);
            break;
          case 3:
            resultado = num1 * num2;
            console.log(`Resultado: ${resultado}`);
            break;
          case 4:
            resultado = num1 / num2;
            console.log(`Resultado: ${resultado}`);
            break;
        }
        break;
      default:
        console.log("Essa opção não existe.");
    }
  }
}

// Chamar a função para iniciar a calculadora
calculadora();
