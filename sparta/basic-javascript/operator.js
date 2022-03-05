console.log('1' + 2);

console.log(2 + 1); // 3을 출력
console.log(2 - 1); // 1을 출력
console.log(4 / 2); // 2를 출력
console.log(2 * 3); // 6을 출력
console.log(10 % 3); // 나머지(remainder) 연산자. 1을 출력
console.log(10 ** 2); // exponentiation. 10의 2승인 100을 출력

let count = 1;
const preIncrement = ++count;
// 증감연산자를 앞에 놓게 되면 아래 주석으로 처리한 두 줄의 코드와 같은 내용입니다.
// 먼저 자기 자신에게 1을 더해서 재할당 한 후, 이를 preIncrement 에 할당했다는 의미입니다.
// count = count + 1
// const preIncrement = count
console.log(`count: ${count}, preIncrement: ${preIncrement}`); // count: 2, preIncrement: 2

const shirtsPrice = 100000;
const pantsPrice = 80000;
let totalPrice = 0;

totalPrice += shirtsPrice; // totalPrice = totalPrice + shirtsPrice 와 동일
console.log(totalPrice);
totalPrice += pantsPrice; // totalPrice = totalPrice + pantsPrice 와 동일
console.log(totalPrice);

totalPrice -= shirtsPrice; // totalPrice = totalPrice - shirtsPrice 와 동일
console.log(totalPrice);

// 강의가 너무 기초이기 때문에 notion에 정리 된 문서를 한 번 훑는 정도로 마무리한다.
// https://www.notion.so/bd5a947d2d634d44b7545597579d9672
