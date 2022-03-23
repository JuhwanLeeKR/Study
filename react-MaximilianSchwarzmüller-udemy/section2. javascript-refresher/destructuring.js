// Easily extract array elements or object properties and store them in variables

// Destructuring in Array
const numbers = [1, 2, 3];
[num1, , num3] = numbers;
console.log(num1, num3);

// Destructuring in Object
/* 바로 실행은 불가능하지만 대략 이렇게 쓰인다.

{name} = {name: 'Max', age: 28}
console.log(name) // Max
console.log(age) // undefined

 */
