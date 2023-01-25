// Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro. Haz varios ejemplos y compruebalos.

// Sugerencia de función:
const names = ["Caracol", "Mosquito", "Salamandra", "Ajolote"];

const findArrayIndex = (list, word) => {
  word = word.toLowerCase();
  for (const iterator of list) {
    if (iterator.toLowerCase() === word) {
      return list.indexOf(iterator);
    }
  }
};
console.log(findArrayIndex(names, "ajolote"));
