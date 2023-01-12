// Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:

const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];
function removeDuplicates(params) {
  newDuplicates = [];

  for (let i = 0; i < params.length; i++) {
    if (!newDuplicates.includes(params[i])) {
      newDuplicates.push(params[i]);
    }
  }
  return newDuplicates;
}

console.log(removeDuplicates(duplicates));
