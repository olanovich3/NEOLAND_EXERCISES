// Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:

const nameFinder = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];

const finderName = (list, name) => {
  const finder = list.find(
    (nombre) => nombre.toLowerCase() === name.toLowerCase()
  );
  if (finder === name) {
    return `El valor es True y está en el indice ${list.indexOf(name)}`;
  } else {
    return "El nombre no se encuentra en la lista";
  }
};

console.log(finderName(nameFinder, "Xabier"));

//DUDA. PREGUNTAR DONDE SE DEBERÍA COLOCAR EL TOLOWERCASE
