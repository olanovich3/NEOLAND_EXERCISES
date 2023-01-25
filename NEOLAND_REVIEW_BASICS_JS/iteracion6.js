// **Iteración #6: Función swap**

// Crea una función llamada `swap()` que reciba un array y dos parametros que sean indices del array. La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array resultante.

const gamers = [
  "Mesirve",
  "Cristiano Romualdo",
  "Fernando Muralla",
  "Ronalguiño",
];

const swap = (array, a, b) => {
  var c = array[a];
  array[a] = array[b];
  array[b] = c;
  return array;
};

console.log(swap(gamers, 0, 1));
