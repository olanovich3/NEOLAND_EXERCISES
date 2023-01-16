// Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.  Puedes usar este array para probar tu función:

const counterWords = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "upgrade",
  "code",
];

const newArray = [];
const repeatCounter = (list) => {
  for (const word of list) {
    if (newArray[word]) {
      newArray[word]++;
    } else newArray[word] = 1;
  }
  return newArray;
};
console.log(repeatCounter(counterWords));
