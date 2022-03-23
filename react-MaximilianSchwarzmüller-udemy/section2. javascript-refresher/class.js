// ES6 문법 활용
class Human {
  gender = 'male';

  printGender = () => {
    console.log(this.gender);
  };
}

class Person extends Human {
  name = 'Max';
  gender = 'female';

  printMyName = () => {
    console.log(this.name);
  };
}

const person = new Person();
person.printMyName();
person.printGender();

// 현재 클래스형 컴포넌트가 아닌 함수형 컴포넌트로 대부분 사용하니 알고만 있자.
