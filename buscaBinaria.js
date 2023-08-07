function buscaBinaria(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const middleValue = array[middle];

    if (middleValue === target) {
      return middle; // Retorna o índice do valor procurado no array
    } else if (middleValue < target) {
      left = middle + 1; // Busca na metade direita do array
    } else {
      right = middle - 1; // Busca na metade esquerda do array
    }
  }

  return -1; // Retorna -1 caso o valor não seja encontrado no array
}

const array = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];
const targetValue = 20;
const index = buscaBinaria(
  array.sort((a, b) => a - b),
  targetValue
);

if (index !== -1) {
  console.log(`O valor ${targetValue} foi encontrado no índice ${index}.`);
} else {
  console.log(`O valor ${targetValue} não foi encontrado no array.`);
}
