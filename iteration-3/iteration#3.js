const users = [
  {
    name: "Manolo el del bombo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Mortadelo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Super Lopez",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "El culebra",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];


let counter = {};
for (let user of users) {
  let sounds = user.favoritesSounds;
  for (let sound in sounds) {
    counter[sound] ? counter[sound]++ : counter[sound] = 1;
  };
};
 //counter[sound]--> añade el sonido en forma de clave y al sumarle/igularle le incrementa el sonido o lo iguala y añade como valor en type number;
console.log(counter)


//Con este código podemos realizar un conteo; 
/* let test = ["Manolo", "bombo", "ruido", "Manolo", "ruido"];
let test2 = {};
for(let test3 of test){
    // console.log(test3) devuelve los valores
    if(!test2[test3]){
        test2[test3] = 1;
    }else{
        test2[test3]++
    };
};
console.log(test2)
 */


