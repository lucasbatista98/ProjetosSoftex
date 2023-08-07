// Definindo a matriz bidimensional para armazenar as informações dos animais
const matrizAnimais = [
  // [nome, espécie, idade]
  ["Leão", "Felino", 5],
  ["Elefante", "Mamífero", 10],
  ["Tigre", "Felino", 3],
  ["Girafa", "Mamífero", 7],
  ["Pinguim", "Ave", 2],
];

// Função para exibir as informações de todos os animais
function exibirInformacoesAnimais(matriz) {
  console.log("--- Informações dos Animais ---");
  console.log("Nome\t\tEspécie\t\tIdade");
  for (let i = 0; i < matriz.length; i++) {
    const [nome, especie, idade] = matriz[i];
    console.log(`${nome}\t\t${especie}\t\t${idade}`);
  }
}

// Exibindo as informações dos animais na matriz
exibirInformacoesAnimais(matrizAnimais);
