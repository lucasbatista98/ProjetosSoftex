const readline = require("readline-sync");

// Inicialização dos votos para cada candidato e votos brancos/nulos
let votosCandidatoX = 0;
let votosCandidatoY = 0;
let votosCandidatoZ = 0;
let votosBranco = 0;
let votosNulos = 0;

// Função para exibir o resultado da eleição
function exibirResultado() {
  console.log("Resultado da Eleição:");
  console.log(`Candidato X: ${votosCandidatoX} votos`);
  console.log(`Candidato Y: ${votosCandidatoY} votos`);
  console.log(`Candidato Z: ${votosCandidatoZ} votos`);
  console.log(`Votos em Branco: ${votosBranco}`);
  console.log(`Votos Nulos: ${votosNulos}`);

  // Determinar o vencedor
  if (votosCandidatoX > votosCandidatoY && votosCandidatoX > votosCandidatoZ) {
    console.log("Candidato X é o vencedor!");
  } else if (votosCandidatoY > votosCandidatoX && votosCandidatoY > votosCandidatoZ) {
    console.log("Candidato Y é o vencedor!");
  } else if (votosCandidatoZ > votosCandidatoX && votosCandidatoZ > votosCandidatoY) {
    console.log("Candidato Z é o vencedor!");
  } else {
    console.log("A eleição terminou em empate.");
  }
}

// Função para realizar a votação
function votar() {
  const voto = readline.question("Digite o número do candidato (1 para X, 2 para Y, 3 para Z, 0 para branco, qualquer outra coisa para nulo):");

  // Verificar o voto
  switch (voto) {
    case "1":
      votosCandidatoX++;
      break;
    case "2":
      votosCandidatoY++;
      break;
    case "3":
      votosCandidatoZ++;
      break;
    case "0":
      votosBranco++;
      break;
    default:
      votosNulos++;
      console.log("Voto nulo - número inválido.");
      break;
  }

  const finalizar = readline.question("Deseja finalizar a votação? (Digite 'sim' para finalizar)");

  if (finalizar.toLowerCase() === "sim") {
    exibirResultado();
  } else {
    votar(); // Chama a função votar novamente para continuar a votação
  }
}

// Iniciar a votação
votar();
