let quarterCounter= 0;

export function Quarters(price) {
  
    if (price - .25 >= 0){
        let counter = 1 + Quarters(price - .25);
        console.log(counter);
        return counter;
    }
    //push quarterCounter to array in key value pair;
    return 0;
}

export function Dimes(price) {
  if (price < 0.1){
    return 0;
  }
  return 1 + Dimes(price - 0.1);
}

export function Nickels(price) {
  return price < 0.05 ? 0 : 1 + Nickels(price - 0.05);
}

export function Pennies(price) {
  return ~~(price * 100);
}

export function coinCounter(price){
  let coins={25:0, 10:0, 5:0, 1:0};
  coins[25] = Quarters(price);
  price -= coins[25] * 0.25;
  coins[10] = Dimes(price);
  price -= coins[10] * 0.1;
  coins[5] = Nickels(price);
  price -= coins[5] * .05;
  coins[1] = Pennies(price);
  return coins;
}
//Closure option for function

const coin = (value) => {
  return (price) => {
    return Math.floor(price / value), price % value;
  }
}

const QuarterCounter = coin(0.25);
const DimeCounter = coin(0.1)
const NickelCounter = coin(0.05);
const PennyCounter = coin(0.01);
let [quarters, dimes, nickels, pennies, remainder] = [0, 0, 0, 0, 0];
[quarters, remainder] = QuarterCounter(price);
[dimes, remainder] =DimeCounter(price);
[nickels, remainder] =NickelCounter(price);
[pennies, remainder] =PennyCounter(price);


let coins = {};
[.25, .1, .05, .01].forEach(value =>{
  [numberOfCoins, remainder] = coin(value)(price);
  coins[value] = numberOfCoins;
})