// El swapping de variables en Javascript es el proceso por el cual intercambiamos el valor de dos variables.
let players = ["Mesirve", "Cristiano Romualdo", "Fernando Muralla", "Ronalguiño"];

// Test 1
function swap(arr, index1, index2) {
  let aux = "";
  // console.log(arr[index1]) Nos devuelve "Cristiano Romualdo" es lo mismo que --> players[1]
  aux = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = aux;
  return arr;
}
let result = swap(players, 1, 2);
console.log(result);




console.log('_______________________________________________________________________________________')
console.log();


// Test 2

function swap2(arr, indexA, indexB) {
    let temp = arr[indexA];
    arr[indexA] = arr[indexB];
    arr[indexB] = temp;
    return arr;
};

 let resutl2 = swap2(players, 0, 3);
 console.log(resutl2)