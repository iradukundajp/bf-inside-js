'use strict';

console.log('-- begin --');

// refactor this code to use a _?_:_ instead of a conditional

// try different values and different types
const isLoggedIn = true;
const secretInformation = 'hello';
const warningMessage = 50;
console.log(isLoggedIn, secretInformation, warningMessage);

const toDisplay = isLoggedIn ? secretInformation : warningMessage;

console.log(toDisplay);

console.log('-- end --');
