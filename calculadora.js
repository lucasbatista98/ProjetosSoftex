const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function realizarCalculo(entrada) {
  const partes = entrada.split(" ");
  const operador = partes[1];
  const num1 = parseFloat(partes[0]);
  const num2 = parseFloat(partes[2]);

  switch (operador) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    case "/":
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        return "Erro: Divisão por zero";
      }
    default:
      return "Operador inválido";
  }
}

function iniciarCalculadora() {
  rl.question("Digite uma operação (por exemplo, 2 + 2): ", (entrada) => {
    if (entrada.toLowerCase() === "sair") {
      rl.close();
      return;
    }

    const resultado = realizarCalculo(entrada);
    console.log(`Resultado: ${resultado}`);

    iniciarCalculadora(); // Continue a calculadora
  });
}

console.log('Calculadora Simples (Digite "sair" para sair)');
iniciarCalculadora();
