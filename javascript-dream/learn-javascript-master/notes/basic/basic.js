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
