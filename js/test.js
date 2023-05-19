'use strict';

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.map(dog => (dog.recommendedFood = dog.weight ** 0.75 * 28));
console.log(dogs);
console.log('----------------');

const sarahsDog = dogs.filter(dog => dog.owners.includes('Sarah'));
console.log(sarahsDog);
console.log('----------------');

if (sarahsDog.curFood <= sarahsDog.recommendedFood * 0.9) {
  console.log(`Sarah's dog is eating too little.`);
} else if (sarahsDog.curFood >= sarahsDog.recommendedFood * 1.1) {
  console.log(`Sarah's dog is eating too much.`);
} else {
  console.log(`Sarah's dog is eating okay.`);
}
console.log();

const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood >= dog.recommendedFood * 1.1)
  .map(dog => dog.owners)
  .reduce((acc, owners) => acc.concat(owners), []);
console.log(ownersEatTooMuch);
console.log();

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood <= dog.recommendedFood)
  .map(dog => dog.owners)
  .reduce((acc, owners) => acc.concat(owners));
console.log(ownersEatTooLittle);
console.log();

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too much!`);
console.log();

const eatingExactly = dogs.filter(dog => dog.curFood === dog.recommendedFood);
console.log('Eating exactly:', eatingExactly.length > 0 ? true : false);
console.log();

const eatingOkay = dogs.filter(
  dog =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
);
console.log('Eating okay:', eatingOkay.length > 0 ? true : false);
console.log('----------------');

const dogsOkay = dogs.filter(
  dog =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
);
console.log(dogsOkay);
console.log('----------------');

const dogsCopy = dogs.slice(0);
console.log(dogsCopy);
