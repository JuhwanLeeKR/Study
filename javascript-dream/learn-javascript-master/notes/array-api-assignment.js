'use strict';
// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  const fruitsString = fruits.toString();
  console.log(fruitsString);
  // Ellie's code
  const fruitsJoin = fruits.join('|');
  console.log(fruitsJoin);
}

// Q2. make an array out of a string
{
  const fruits = 'π, π₯, π, π';
  // google searching
  const fruitsArray = fruits.split(', ');
  console.log(fruitsArray);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  // λ°°μ΄ μμ²΄λ₯Ό λ³νμν¨λ€.
  const arrayReverse = array.reverse();
  console.log(arrayReverse);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  // λ°°μ΄ μμ²΄λ₯Ό λ³ν μν¨λ€.
  const arraySplice = array.splice(2);
  console.log(array);
  // λ°°μ΄μμ μνλ λΆλΆλ§ λ°μ μ¬ μ μλ€.
  const arraySlice = array.slice(0, 2);
  console.log(arraySplice);
  console.log(arraySplice);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  const result = students.find(function (student, index) {
    return student.score === 90;
  });
  const result2 = students.find((student) => student.score === 90);
  console.log(result);
  console.log(result2);
}

// Q6. make an array of enrolled students
{
  const result = students.filter(function (A) {
    return A.enrolled;
  });
  const result2 = students.filter((stu) => stu.enrolled);
  console.log(result);
  console.log(result2);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  // λ€λ₯Έ λ°©μμ dataλ‘ λ§λ€μ΄ μ€λ€.
  const result = students.map((student) => student.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  const result = students.map(function (student) {
    if (student.score < 50) {
      return true;
    } else {
      return false;
    }
  });
  console.log(result);
  console.clear();
  const result2 = students.some((student) => student.score < 50);
  console.log(result2);
  const result3 = !students.every((student) => student.score >= 50);
  console.log(result3);
}

// Q9. compute students' average score
{
  console.clear();
  const result = students.reduce(function (prev, curr) {
    console.log('-----------');
    console.log(prev);
    console.log(curr);
    return prev + curr.score;
  }, 0);
  console.log(result);
  const result2 = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result2 / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students.map((student) => student.score).join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join();
  console.log(result);
}
