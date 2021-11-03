// calculator practice (211103)

const calculator = {
    add: function(a, b) {
        return a + b;
    },
    minus: function(a, b) {
        return a - b;
    },
    divide: function(a, b) {
        return a / b;
    },
    multiple: function(a, b) {
        return a * b;
    },
    square: function(a, b) {
        return a ** b;
    },
}

const plusResult = calculator.add(12, 13);
const minusResult = calculator.minus(plusResult, 10);
const multipleResult = calculator.multiple(10, minusResult);
const divideResult = calculator.divide(multipleResult, plusResult);
const squareResult = calculator.square(divideResult, minusResult);

console.log(squareResult);
// const age = 96;

// function calculateKrAge(ageOfForeigner) {
//     return ageOfForeigner + 2;
// };

// const krAge = calculateKrAge(age);

// console.log(krAge);