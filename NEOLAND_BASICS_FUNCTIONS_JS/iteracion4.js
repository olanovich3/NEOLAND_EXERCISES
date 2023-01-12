// Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6];

const average = (param) => {
  let suma = 0;

  for (const item of param) {
    suma += item;
  }
  return suma / param.length;
};

console.log(average(numbers));
