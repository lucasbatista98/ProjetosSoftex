// Criação do array de objetos "pessoa"
const pessoas = [
  {
    nome: "João",
    idade: 30,
    profissao: "Engenheiro",
    cidade: "São Paulo",
  },
  {
    nome: "Maria",
    idade: 25,
    profissao: "Médica",
    cidade: "Rio de Janeiro",
  },
  {
    nome: "Pedro",
    idade: 35,
    profissao: "Advogado",
    cidade: "Brasília",
  },
  {
    nome: "Ana",
    idade: 28,
    profissao: "Designer",
    cidade: "Curitiba",
  },
];

// Usando o loop for of para iterar sobre os objetos
for (const pessoa of pessoas) {
  console.log("Dados da pessoa:");
  for (const propriedade in pessoa) {
    console.log(`${propriedade}: ${pessoa[propriedade]}`);
  }
  console.log("----------------------");
}
