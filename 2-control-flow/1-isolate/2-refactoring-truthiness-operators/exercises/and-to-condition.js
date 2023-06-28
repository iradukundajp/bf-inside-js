'use strict';

console.log('-- begin --');

// refactor this code to use a conditional instead of &&

// try different values and different types
const a = 'hello';
console.log(a);
let isBigNumber;
if (isBigNumber){
  isBigNumber = typeof a === 'number';
}else {
  isBigNumber = a > 1000;
}
//const isBigNumber = typeof a === 'number' && a > 1000;
console.log(isBigNumber);

console.log('-- end --');
