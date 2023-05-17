'use strict';

const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

const checkDogs = function (dogs1, dogs2) {
  const juliasArr = dogs1.slice(1, -2);
  const dogs = [...juliasArr, ...dogs2];
};

checkDogs(dogsJulia, dogsKate);
