/* *************************
 * 자바스크립트 함수 기본편
 **************************** */
{
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
}

/* *************************
 * 자바스크립트 기초 2. 함수
 * | 함수 정의, 호출, 그리고 콜백함수
 **************************** */
{
  console.clear();

  const num = 1;
  const num2 = 2;
  const result = num + num2;
  console.log(result);

  const num3 = 1;
  const num4 = 2;
  const result2 = num3 + num4;

  function add(num1, num2) {
    return num1 + num2;
  }

  const sum = add(3, 4);
  console.log(sum);
}
{
  function add(num1, num2) {
    return num1 + num2;
  }

  function print(a, b) {
    console.log(`${a} ${b}`);
  }

  print(8, 33);

  const doSomething = add;

  const result = doSomething(2, 3);
  console.log(result);
  const result2 = add(2, 3);
  console.log(result2);

  console.clear();

  function divide(num1, num2) {
    return num1 / num2;
  }
  function surprise(operator) {
    const result = operator(2, 3); // devide(2, 4)
    console.log(result);
  }

  surprise(divide);
}

/* *************************
 * 자바스크립트 기초 3. 연산자
 * | boolean의 모든 것 && 연산자
 **************************** */
{
  console.clear();
  // false: 0, -0, '', null, undefined
  // true: -1, 'hello', [], 'false'
  let num = 9; // undefined
  if (num) {
    console.log('true!');
  }

  num && console.log(num);

  let obj = {
    name: 'ellie',
  };
  if (obj) {
    console.log(obj.name);
  }

  obj && console.log(obj.name);
}

/* *************************
 * 자바스크립트 기초 4. 클래스
 * | 클래스 예제와 콜백 함수 최종 정리
 **************************** */
{
  console.clear();
  class Counter {
    constructor(runEveryFiveTimes) {
      this.counter = 0;
      this.callback = runEveryFiveTimes;
    }

    increase(runIf5Times) {
      // class에서 함수를 작성할 때는 function을 붙이지 않아도 된다.
      this.counter++;
      console.log(this.counter);
      if (this.counter % 5 === 0) {
        this.callback && this.callback(this.counter);
      }
    }
  }

  function printSomething(num) {
    console.log(`'yo!' ${num}`);
  }
  function alertNum(num) {
    alert(`'alert!' ${num}`);
  }

  const printCounter = new Counter(printSomething);
  const alertCounter = new Counter(alertNum);
  // Class를 하나의 완전체로 만들기 보단, 원하는 기능을 끼워맞추어 재조립이 가능하도록 설계하라.
}
