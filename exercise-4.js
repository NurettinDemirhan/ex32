const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};
const {firstName,lastName,...rest} = person;
const json = JSON.stringify(rest);

console.log(json); // Should return: { id: 1, age: 25 }