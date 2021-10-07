console.log('Test 1______________________________________');
// Pasando como parametro en la función un único numero.
function rollDice(number){
    let num = Math.floor((Math.random()*number)+1);
    console.log(`Your lucky number is... ${num}!!`);
};

rollDice(6);

console.log();
console.log('Test 2______________________________________');
// Pasando como parametro en la función dos variales con un mínimo y máximo.
let min = 1;
let max = 12;

function rollDice2(min, max){
    var print = Math.floor(Math.random()*(max-min+1)+min);
    console.log(`Burn all your money in the number... ${print}!!`);
};

rollDice2(min, max);
console.log();

