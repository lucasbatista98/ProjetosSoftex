const readline = require("readline-sync");

let nota1 = parseFloat(readline.question("Nota 1 (entre 0 e 10): "));
let nota2 = parseFloat(readline.question("Nota 2 (entre 0 e 10): "));
let nota3 = parseFloat(readline.question("Nota 3 (entre 0 e 10): "));
let soma = nota1 + nota2 + nota3;

let resultado = soma / 3;

let status = resultado >= 7 ? "Aprovado" : "Reprovado";

console.log(`A média entre ${nota1}, ${nota2} e ${nota3} é igual à ${resultado}.`);
console.log(`Está ${status}.`);
