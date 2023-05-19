'use strict';

// Challenge 1
const julia1 = [3, 5, 2, 12, 7],
  kate1 = [4, 1, 15, 8, 3];
const julia2 = [9, 16, 6, 8, 3],
  kate2 = [10, 5, 6, 1, 4];

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrect = dogsJulia.slice(0, -2);
  const dogs = dogsJuliaCorrect.concat(dogsKate);

  dogs.map((age, i) =>
    console.log(
      `Dog number ${i + 1} is ${
        age < 3 ? 'is still a puppy 🐶' : `an adult, and is ${age} years old`
      } `
    )
  );
};
checkDogs(julia1, kate1);
console.log();
checkDogs(julia2, kate2);
console.log();

// Challenge 2
const testData1 = [5, 2, 4, 1, 15, 8, 3],
  testData2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (dogs) {
  return dogs
    .map(age => (age > 2 ? 16 + age * 4 : 2 * age))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length);
};
console.log(calcAverageHumanAge(testData1));
console.log(calcAverageHumanAge(testData2));
console.log();

// Challenge 3
const calcAverageHumanAge2 = dogs =>
  dogs
    .map(age => (age > 2 ? 16 + age * 4 : 2 * age))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length);

console.log(calcAverageHumanAge2(testData1));
console.log(calcAverageHumanAge2(testData2));
console.log();

// Challenge 4
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.map(dog => (dog.recommendedFood = dog.weight ** 0.75 * 28));
console.log(dogs);
console.log();

const sarahsDog = dogs.filter(dog => dog.owners.includes('Sarah'));

if (sarahsDog.curFood <= sarahsDog.recommendedFood)
  console.log(`Sarah's dog is eating too little.`);
else if (sarahsDog.curFood >= sarahsDog.recommendedFood)
  console.log("Sarah's dog is eating too much");
else console.log("Sarah's dog is eating okay.");
console.log();

const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood >= dog.recommendedFood)
  .map(dog => dog.owners)
  .reduce((acc, owners) => acc.concat(owners));
console.log('Dogs eat too much:', ownersEatTooMuch);
console.log();

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood <= dog.recommendedFood)
  .map(dog => dog.owners)
  .reduce((acc, owners) => acc.concat(owners));
console.log('Dogs eat too little:', ownersEatTooLittle);
console.log();

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);
console.log();

console.log(
  dogs.reduce(
    (acc, dog) => (acc = false || dog.curFood === dog.recommendedFood * 0.9)
  )
);
console.log();

console.log(
  dogs.reduce(
    (acc, dog) =>
      (acc =
        false ||
        (dog.curFood > dog.recommendedFood &&
          dog.curFood < dog.recommendedFood))
  )
);
