function calculadora(num1, num2, operacao) {
  let resultado = 0;

  switch (operacao) {
    case 1:
      resultado = num1 + num2;
      break;
    case 2:
      resultado = num1 - num2;
      break;
    case 3:
      resultado = num1 * num2;
      break;
    case 4:
      resultado = num1 / num2;
      break;
    default:
      console.log("Operação inválida! Escolha um número de 1 a 4.");
      break;
  }

  return resultado;
}

// Exemplos de uso:
console.log(calculadora(5, 3, 1)); // Soma: 5 + 3 = 8
console.log(calculadora(5, 3, 2)); // Subtração: 5 - 3 = 2
console.log(calculadora(5, 3, 3)); // Multiplicação: 5 * 3 = 15
console.log(calculadora(5, 3, 4)); // Divisão: 5 / 3 = 1.6666666666666667
console.log(calculadora(5, 3, 5)); // Operação inválida: exibirá a mensagem de erro e retornará 0
