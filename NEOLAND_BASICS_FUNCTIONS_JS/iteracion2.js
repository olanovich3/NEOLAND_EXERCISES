// Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

// Puedes usar este array para probar tu función:

const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

const findLongestWord = (param) => {
  let longestWord = "";
  for (const item of avengers) {
    if (item.length > longestWord.length) {
      longestWord = item;
    }
  }
  return longestWord;
};

console.log(findLongestWord(avengers));
