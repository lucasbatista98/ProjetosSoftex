const readline = require("readline-sync");

let nota1 = parseFloat(readline.question("Nota 1 (entre 0 e 10): "));
let nota2 = parseFloat(readline.question("Nota 2 (entre 0 e 10): "));

let mediaAtual = (nota1 + nota2) / 2;

let notaMinima = nota1 >= 7 ? 7 : nota2 >= 7 ? 7 : 0;

if (notaMinima > 0) {
  console.log("Média Atual: " + mediaAtual.toFixed(2));
  console.log("Nota Mínima Necessária na Próxima Prova: " + notaMinima.toFixed(2));
} else {
  console.log("Você já está aprovado com média " + mediaAtual.toFixed(2));
}

console.log(`Nota Mínima requerida: ${notaMinima}`);
