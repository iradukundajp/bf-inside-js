'use strict';

console.log('-- begin --');

const school = 'HackYourFuture';

// for...of loop
for (const letter of school) {
  console.log(letter);
}

// converted to for loop
for (let i = 0; i < school.length; i++) {
  const letter = school[i];
  console.log(letter);
}

// converted to while loop
let i = 0;
while (i < school.length) {
  const letter = school[i];
  console.log(letter);
  i++;
}

console.log('-- end --');
