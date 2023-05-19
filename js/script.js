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
console.log();

// Challenge 2

const calcAverageHumanAge = function (ages) {
  const humanAge = ages.map(age => (age > 2 ? 16 + age * 4 : 2 * age));
  const adult = humanAge.filter(age => age >= 18);
  const average = adult.reduce((acc, age, i, arr) => acc + age / arr.length, 0);
  return average;
};
const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

const avg1 = calcAverageHumanAge(data1);
const avg2 = calcAverageHumanAge(data2);

console.log('Average 1:', avg1);
console.log('Average 2:', avg2);
console.log();

// Challenge 3
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// Part 1: Add recommended food portion to objects
dogs.map(dog => (dog.recommemdedFood = dog.weight ** 0.75 * 28));

// Part 2: Find Sarah's dog and log info about it
const sarahsDog = dogs.filter(dog => dog.owners.includes('Sarah'));
console.log(sarahsDog);
console.log('----------------------------------');

// Create owners of dogs which eat too much
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood >= dog.recommemdedFood * 1.1)
  .map(dog => dog.owners)
  .reduce((acc, owners) => acc.concat(owners));
console.log(ownersEatTooMuch);
console.log();

// Create owners of dogs which eat too little
const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood <= dog.recommemdedFood * 0.9)
  .map(dog => dog.owners)
  .reduce((acc, owners) => acc.concat(owners));
console.log(ownersEatTooLittle);
console.log();

// Log owners whose dogs eat too much or little
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s owners eat too little!`);
console.log();

// Check if any dog is eating exactly as recommended
console.log(
  dogs.reduce(
    (acc, dog) => (acc = false || dog.curFood === dog.recommemdedFood)
  )
);
console.log();

// Check and log if any dog is eating okay
console.log(
  dogs.reduce(
    (acc, dog) =>
      (acc =
        false ||
        (dog.curFood > dog.recommemdedFood * 0.9 &&
          dog.curFood < dog.recommemdedFood * 1.1)),
    false
  )
);
console.log();

// Find dogs eating okay
const dogsOkay = dogs.filter(
  dog =>
    dog.curFood > dog.recommemdedFood * 0.9 &&
    dog.curFood < dog.recommemdedFood * 1.1
);
console.log(dogsOkay);
console.log();
