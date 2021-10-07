const creatures = ["Caracol", "Mosquito", "Salamandra", "Ajolote"];

function findArrayIndex(array, text) {
  for (let value of array) {
    if (value === text) {
      let index = array.indexOf(value);
      console.log(`Element: ${value} --> Position: ${index}`);
    } else {
      console.log('Error: not existing element');
    };
  };
};

findArrayIndex(creatures, 'Salamandra');
//Error de código: no es posible deterner la iteración para que solo arroje un mensaje por cada condición.