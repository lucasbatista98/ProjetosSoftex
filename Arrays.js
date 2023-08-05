// Criar as três listas
const nomes = ["Ana", "Carlos", "Maria", "João", "Pedro", "Mariana", "José", "Lúcia", "Felipe", "Amanda"];

const idades = [25, 30, 22, 28, 35, 29, 24, 27, 31, 26];

const coresFavoritas = ["azul", "vermelho", "verde", "amarelo", "rosa", "roxo", "laranja", "preto", "branco", "cinza"];

// Imprimir as listas originais
console.log("--- Listas originais ---");
console.log("Nomes:", nomes);
console.log("Idades:", idades);
console.log("Cores favoritas:", coresFavoritas);

// Fazer algumas modificações
idades[2] = 23; // Alterar a idade da terceira pessoa para 23
coresFavoritas[5] = "azul"; // Alterar a cor favorita da sexta pessoa para 'azul'

// Imprimir as listas modificadas
console.log("--- Listas modificadas ---");
console.log("Nomes:", nomes);
console.log("Idades:", idades);
console.log("Cores favoritas:", coresFavoritas);
