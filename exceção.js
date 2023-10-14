try {
  const numero1 = parseFloat(prompt("Digite o primeiro número:"));
  const numero2 = parseFloat(prompt("Digite o segundo número:"));

  if (isNaN(numero1) || isNaN(numero2)) {
    throw new Error("Um ou ambos os valores inseridos não são números.");
  }

  if (numero2 === 0) {
    throw new Error("A divisão por zero não é permitida.");
  }

  const resultado = numero1 / numero2;
  console.log(`O resultado da divisão é: ${resultado}`);
} catch (erro) {
  console.error(`Ocorreu um erro: ${erro.message}`);
} finally {
  console.log("Fim da operação.");
}
