const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];

const averageWord = (param) => {
  let suma = 0;

  for (const item of param) {
    if (typeof item == "number") {
      suma += item;
    } else {
      suma += item.length;
    }
  }
  return suma;
};
console.log(averageWord(mixedElements));
