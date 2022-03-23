// spread in Array
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];
const newNumbersTwo = [numbers, 4]; // 둘의 차이를 알아야 한다.

console.log(newNumbers, newNumbersTwo);

// spread in Object
const person = {
  name: 'Max',
};

const newPerson = {
  ...person,
  age: 28,
};

console.log(newPerson);

// spread in function
const filter = (...args) => {
  return args.filter((el) => el === 1);
};

console.log(filter(1, 2, 3));
