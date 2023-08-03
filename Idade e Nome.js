const readline = require("readline-sync");

while (true) {
  var nomeCompleto = readline.question("Digite o seu nome completo: ");
  var anoNascimento = readline.questionInt("Digite seu ano de nascimento: ");

  if (typeof anoNascimento != "number") {
    console.log("Escreva o ano corretamente!");
  } else if (anoNascimento < 1922 || anoNascimento > 2021) {
    console.log("Digite o ano entre 1922 e 2021");
  } else {
    var idadeAtual = 2022 - anoNascimento;
    console.log("O nome do usuário é: " + nomeCompleto + ", e sua idade é: " + idadeAtual);
    break;
  }
}
