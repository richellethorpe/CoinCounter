import AgeCalc from  './../src/js/ageCalc.js';

describe (`AgeCalc`, () => {
  test(`should correctly create an age object that contains planet, user age, and life expectancy`, () => {
    const ageCalc = new AgeCalc("earth", 36, 90)
    expect(ageCalc.planet).toEqual("earth");
    expect(ageCalc.userAge).toEqual(36);
    expect(ageCalc.userLifeExpectancy).toEqual(90);
  });

  test(`should correctly create an age based on user age input to calculate their age on mercury`, () => {
    let newPlanet = new AgeCalc("mercury", 36)
    newPlanet.mercuryCalculation()
    expect(newPlanet.userAge).toEqual(150);
    })

  test(`should correctly create an age based on user age input to calculate their age on venus`, () => {
    let newPlanet2 = new AgeCalc("venus", 36)
    newPlanet2.venusCalculation()
    expect(newPlanet2.userAge).toEqual(58);
    })

  });

//it will check
