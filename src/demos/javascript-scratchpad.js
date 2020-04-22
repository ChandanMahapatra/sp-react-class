// Array destructuring
const names = ['John', 'Dan', 'Tim'];

const [a, b, c] = names;

console.log(a); // 'John'

const person = {
  firstName: 'John',
  lastName: 'Paxton',
};

const { firstName: fName } = person;
// const firstName = person.firstName;

console.log('fName: ', fName);