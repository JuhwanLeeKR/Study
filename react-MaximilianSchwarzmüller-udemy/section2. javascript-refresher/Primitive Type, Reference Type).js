// Primitive Type
const number = 1; // Primitive Type
const num2 = number;

console.log(num2);

// Refrence Type (Object, Array)
const person = {
  name: 'Max',
};

const secondPerson = person; // Copy pointer
person.name = 'Manu';

console.log(secondPerson); // { name: 'Manu' }

// React에서 중요하다!!
// 변화가 생기지 않도록 복사하는 방법을 알아야한다.
// => pointer를 카피하는 것이 아닌 객체를 진짜 복사하는 방법을 알아야한다!

const personTwo = {
  name: 'Max',
};

const secondPersonTwo = {
  ...personTwo,
}; // use Spread operator, Create new Object and copy elements

personTwo.name = 'Manu';

console.log(secondPersonTwo); // { name: 'Max' }
