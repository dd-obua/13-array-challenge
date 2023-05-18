'use strict';

// Challenge 1
const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

const dogsJulia2 = [9, 16, 6, 8, 3];
const dogsKate2 = [10, 5, 6, 1, 4];

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);

  const dogs = dogsJuliaCorrected.concat(dogsKate);

  dogs.forEach(function (dog, i) {
    console.log(
      `Dog number ${i + 1} is ${
        dog < 3 ? 'still a puppy 🐶' : `an adult, and is ${dog} years old.`
      }`
    );
  });
};

checkDogs(dogsJulia, dogsKate);
console.log();
checkDogs(dogsJulia2, dogsKate2);

// Challenge 2
const data1 = [5, 2, 4, 1, 15, 8, 31];
const data2 = [16, 6, 10, 5, 6, 1, 42];

const calcAverageHumanAge = function (dogAges) {
  return dogAges.map(dogAge => (dogAge > 2 ? 16 + dogAge * 4 : 2 * dogAge));
};

console.log(calcAverageHumanAge(data1));
console.log(calcAverageHumanAge(data2));
