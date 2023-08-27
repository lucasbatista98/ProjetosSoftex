// Função tradicional sem parâmetros
function saudacao() {
  console.log("Olá! Bem-vindo à calculadora.");
}

// Função tradicional com parâmetros e retorno de valor
function soma(a, b) {
  return a + b;
}

// Arrow function com parâmetros e retorno de valor
const subtracao = (a, b) => a - b;

// Uso das funções
saudacao(); // Chama a função de saudação

const num1 = 10;
const num2 = 5;

const resultadoSoma = soma(num1, num2);
const resultadoSubtracao = subtracao(num1, num2);

console.log(`A soma de ${num1} e ${num2} é igual a ${resultadoSoma}`);
console.log(`A subtração de ${num1} e ${num2} é igual a ${resultadoSubtracao}`);
