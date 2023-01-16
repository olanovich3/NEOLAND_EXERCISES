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

const noDuplicatesList = (param) => {
  let removeDuplicates = [];

  duplicates.forEach((food) => {
    if (removeDuplicates.includes(food) == false) {
      removeDuplicates.push(food);
    }
  });
  return removeDuplicates;
};

console.log(noDuplicatesList(duplicates));
