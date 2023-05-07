import { Quarters, Dimes, Nickels, Pennies, coinCounter } from '../src/js/coinCounter.js';

describe('Quarters', () => {

  test('returns the number of quarters for a price', () => {
    //arrange
    //act
    let price = 1.00
    expect(Quarters(price)).toEqual(4);
   
  });
})

describe('Dimes', () => {


  test('returns the number of dimes for a price', () => {
    
  let price = .24
  expect(Dimes(price)).toEqual(2);
  });
})

 describe('Nickels', () => {
  test('returns number nickles for a price', ()=>{
    let price= .04
    expect(Nickels(price)).toEqual(0); 
  });
 })
 describe('Pennies', () => {
  test('returns number pennies for a price', ()=>{
    let price= .04
    expect(Pennies(price)).toEqual(4); 
  });
 })

 describe('coinCounter', () => {
  test('returns number coins for a price', ()=>{
    let price= 4.99
    let coins={25:19, 10:2, 5:0, 1:4}
    expect(coinCounter(price)).toEqual(coins); 
  });
 })

