// 1. 함수 선언 & 호출

// 함수 선언
function doSomething() {
  console.log('hello');
}

function add(a, b) {
  const sum = a + b;
  return sum;
}

// 함수 호출
doSomething();

const result = add(1, 2);
console.log(result);

// 2. 언어 공부 방법
// console.log();
// console.dir(); 활용

// 3. 함수를 인자로 전달

function doAnything(add) {
  console.log(add);
  const result = add(2, 3);
  console.log(result);
}

doAnything(add);

const addFun = add;
console.log(addFun);
console.log(addFun(1, 2));
