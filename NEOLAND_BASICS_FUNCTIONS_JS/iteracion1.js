function sum(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    return numberOne;
  } else if (numberTwo > numberOne) {
    return numberTwo;
  }
}

console.log(sum(10, 12));
