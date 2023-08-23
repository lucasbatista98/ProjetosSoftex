const readline = require("readline-sync");

var nota1 = parseFloat(readline.question("nota 1 (entre 0 e 10): "));
var nota2 = parseFloat(readline.question("nota 2 (entre 0 e 10): "));
var nota3 = parseFloat(readline.question("nota 3 (entre 0 e 10): "));
var soma = nota1 + nota2 + nota3;

var resultado = soma / 3;

console.log(`A média entre ${nota1}, ${nota2} e ${nota3} é igual à ${resultado}.`);
